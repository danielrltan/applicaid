from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from app.routes.mock import router as mock_router
from app.routes.onboarding import router as onboarding_router
from app.routes.jobs import router as jobs_router

load_dotenv()

app = FastAPI(title="Uni Helper Mock Adapter", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(mock_router, prefix="")
app.include_router(onboarding_router, prefix="/api")
app.include_router(jobs_router, prefix="/api")

@app.get("/health")
async def health():
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=True) 