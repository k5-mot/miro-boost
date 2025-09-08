from pydantic import Field
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Settings for the application."""

    APP_URL: str = Field(default="http://localhost:3000")
    API_URL: str = Field(default="http://localhost:8000")

    MIRO_CLIENT_ID: str = Field(default="1111111111111111111")
    MIRO_CLIENT_SECRET: str = Field(default="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
    MIRO_REDIRECT_URI: str = Field(default="http://localhost:8000/api/oauth/redirect")

    OPENROUTER_BASE_URL: str = Field(default="https://openrouter.ai/api/v1")
    OPENROUTER_API_KEY: str = Field(
        default="sk-or-v1-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    )
    OPENROUTER_MODEL: str = Field(default="openai/gpt-oss-120b:free")

    AZURE_OPENAI_ENDPOINT: str = Field(default="")
    AZURE_OPENAI_API_KEY: str = Field(default="")
    AZURE_OPENAI_DEPLOYMENT: str = Field(default="")

    LOG_LEVEL: str = Field(default="INFO")
    LOG_FILEPATH: str = Field(default="./log/app.log")

    FASTAPI_HOST: str = Field(default="127.0.0.1")
    FASTAPI_PORT: int = Field(default=8000)

    class Config:
        """Configuration for the settings."""

        env_file = ".env"
        case_sensitive = True


def get_settings() -> Settings:
    """Get the settings for the application."""
    return Settings()


if __name__ == "__main__":
    import json

    from miro_boost.common.logger import get_logger

    settings = get_settings()
    logger = get_logger()
    logger.debug(json.dumps(settings.model_dump(), indent=2))
