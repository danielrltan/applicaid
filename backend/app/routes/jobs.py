import asyncio
import uuid
import os
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
import httpx

router = APIRouter(tags=["Jobs"])

IAM_TOKEN_URL = "https://iam.cloud.ibm.com/identity/token"

class JobInput(BaseModel):
    preferred_location: str = Field(default="Ontario")
    interests: list[str] = Field(default_factory=list)
    goals: list[str] = Field(default_factory=list)
    name: str | None = None

JOBS: dict[str, dict] = {}

async def _get_iam_bearer(api_key: str) -> str:
    async with httpx.AsyncClient() as client:
        resp = await client.post(
            IAM_TOKEN_URL,
            data={
                "grant_type": "urn:ibm:params:oauth:grant-type:apikey",
                "apikey": api_key,
            },
            headers={"Content-Type": "application/x-www-form-urlencoded"},
            timeout=20.0,
        )
        resp.raise_for_status()
        return resp.json()["access_token"]

async def _run_agent(job_id: str, payload: JobInput):
    try:
        wx_url = (os.getenv("WATSONX_URL") or "").rstrip("/")
        wx_api_key = os.getenv("WATSONX_API_KEY")
        wx_agent_id = os.getenv("WATSONX_PROGRAM_COUNSELLOR_AGENT_ID")
        if not (wx_url and wx_api_key and wx_agent_id):
            raise RuntimeError("Watsonx env not configured")
        bearer = await _get_iam_bearer(wx_api_key)
        profile = {
            "preferred_location": payload.preferred_location,
            "interests": payload.interests,
            "goals": payload.goals,
            "user_name": payload.name or "student",
        }
        body = {
            "input": {
                "user_interests": ", ".join(payload.interests) or "general",
                "grades": {},
                "location_preference": payload.preferred_location,
                "user_profile": profile,
            }
        }
        headers = {"Authorization": f"Bearer {bearer}", "Content-Type": "application/json"}
        endpoints = [
            f"{wx_url}/v1/agents/{wx_agent_id}/run",
            f"{wx_url}/v1/agents/{wx_agent_id}/actions/run",
            # Fallbacks some tenants expose
            f"{wx_url}/v1/agents/run",  # requires agent_id in body
            f"{wx_url}/v1/agents/actions/run",
        ]
        last_error = None
        async with httpx.AsyncClient() as client:
            for i, url in enumerate(endpoints):
                try:
                    payload_json = body
                    if "agents/run" in url and i >= 2:
                        payload_json = {"agent_id": wx_agent_id, **body}
                    r = await client.post(url, headers=headers, json=payload_json, timeout=60.0)
                    if r.status_code == 200:
                        JOBS[job_id] = {"status": "done", "result": r.json(), "profile": profile, "endpoint": url}
                        return
                    last_error = f"{r.status_code} {r.text}"
                except Exception as e:
                    last_error = str(e)
        JOBS[job_id] = {"status": "error", "error": f"Watsonx error calling run: {last_error}", "tried": endpoints}
    except Exception as e:
        JOBS[job_id] = {"status": "error", "error": str(e)}

@router.post("/jobs")
async def create_job(payload: JobInput):
    job_id = str(uuid.uuid4())
    JOBS[job_id] = {"status": "queued"}
    asyncio.create_task(_run_agent(job_id, payload))
    return {"job_id": job_id, "status": JOBS[job_id]["status"]}

@router.get("/jobs/{job_id}")
async def get_job(job_id: str):
    job = JOBS.get(job_id)
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
    return job 