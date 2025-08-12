from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
import httpx
import os
import time

router = APIRouter(tags=["Onboarding"])

IAM_TOKEN_URL = "https://iam.cloud.ibm.com/identity/token"

class OnboardingInput(BaseModel):
    preferred_location: str = Field(default="Ontario")
    interests: list[str] = Field(default_factory=list)
    goals: list[str] = Field(default_factory=list)
    name: str | None = None

async def get_iam_bearer(api_key: str) -> str:
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
        if resp.status_code != 200:
            raise RuntimeError(f"IAM error {resp.status_code}: {resp.text}")
        return resp.json()["access_token"]

@router.post("/onboarding/recommendations")
async def onboarding_recommendations(payload: OnboardingInput):
    # Build profile prompt
    profile = {
        "preferred_location": payload.preferred_location,
        "interests": payload.interests,
        "goals": payload.goals,
        "user_name": payload.name or "student",
    }
    # Call Watsonx agent
    wx_url = os.getenv("WATSONX_URL")
    wx_api_key = os.getenv("WATSONX_API_KEY")
    wx_project_id = os.getenv("WATSONX_PROJECT_ID")
    wx_agent_id = os.getenv("WATSONX_PROGRAM_COUNSELLOR_AGENT_ID")
    if not all([wx_url, wx_api_key, wx_project_id, wx_agent_id]):
        raise HTTPException(status_code=500, detail="Watsonx env not configured")

    try:
        bearer = await get_iam_bearer(wx_api_key)
        body = {
            "project_id": wx_project_id,
            "agent_id": wx_agent_id,
            "input": {
                "user_interests": ", ".join(payload.interests) or "general",
                "grades": {},
                "location_preference": payload.preferred_location,
                "user_profile": profile,
            },
        }
        async with httpx.AsyncClient() as client:
            r = await client.post(
                f"{wx_url}/v1/agents/run",
                headers={"Authorization": f"Bearer {bearer}", "Content-Type": "application/json"},
                json=body,
                timeout=45.0,
            )
        if r.status_code != 200:
            raise HTTPException(status_code=502, detail=f"Watsonx error {r.status_code}: {r.text}")
        return {"profile": profile, "result": r.json()}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 