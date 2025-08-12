from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional

class Settings(BaseSettings):
    # Allow extra env vars without failing
    model_config = SettingsConfigDict(env_file=".env", extra='ignore')

    # Source mode: raw or mcp
    SOURCE_MODE: str = "raw"

    # GitHub raw settings
    GH_OWNER: Optional[str] = None
    GH_REPO: Optional[str] = None
    GH_BRANCH: str = "main"

settings = Settings() 