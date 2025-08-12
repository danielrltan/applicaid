import httpx
from app.core.config import settings

RAW_BASE = "https://raw.githubusercontent.com"

class SourceClient:
    def __init__(self):
        self.mode = settings.SOURCE_MODE.lower()

    async def read_json(self, path: str):
        if self.mode == "raw":
            return await self._read_raw_json(path)
        elif self.mode == "mcp":
            # TODO: implement MCP client call to read file
            # placeholder: fall back to raw for now
            return await self._read_raw_json(path)
        else:
            raise RuntimeError(f"Unknown SOURCE_MODE: {self.mode}")

    async def _read_raw_json(self, path: str):
        if not settings.GH_OWNER or not settings.GH_REPO:
            raise RuntimeError("GH_OWNER and GH_REPO must be set")
        url = f"{RAW_BASE}/{settings.GH_OWNER}/{settings.GH_REPO}/{settings.GH_BRANCH}/{path}"
        async with httpx.AsyncClient() as client:
            r = await client.get(url, timeout=10.0)
            r.raise_for_status()
            return r.json() 