from fastapi import APIRouter, HTTPException, Query
from app.services.source import SourceClient

router = APIRouter()
source = SourceClient()

@router.get("/mock/ouinfo/search")
async def search_ouinfo(query: str = Query(..., min_length=1)):
    try:
        index = await source.read_json("ouinfo/index.json")
        q = query.lower()
        hits = [i for i in index if q in i.get("program","" ).lower() or q in i.get("university","" ).lower()]
        return hits[:20]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/mock/ouinfo/program/{pid}")
async def get_program(pid: str):
    try:
        data = await source.read_json(f"ouinfo/programs/{pid}.json")
        return data
    except Exception:
        raise HTTPException(status_code=404, detail="Program not found")

@router.get("/mock/deadlines/{year}/{university}")
async def get_deadlines(year: str, university: str):
    try:
        data = await source.read_json(f"deadlines/{year}/{university}.json")
        return data
    except Exception:
        raise HTTPException(status_code=404, detail="Deadlines not found")

@router.get("/mock/teachassist/{studentId}")
async def get_teachassist(studentId: str):
    try:
        data = await source.read_json(f"teachassist/samples/{studentId}.json")
        return data
    except Exception:
        raise HTTPException(status_code=404, detail="Student not found") 