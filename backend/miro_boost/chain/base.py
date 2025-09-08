from langchain_core.language_models.chat_models import BaseChatModel
from langchain_openai import ChatOpenAI

from miro_boost.common import get_logger, get_settings


def get_llm() -> BaseChatModel | None:
    """Get the default LLM."""
    logger = get_logger()
    settings = get_settings()
    try:
        logger.info("Setting up LLM: %s", settings.OPENROUTER_MODEL)
        llm = ChatOpenAI(
            model=settings.OPENROUTER_MODEL,
            openai_api_key=settings.OPENROUTER_API_KEY,
            openai_api_base=settings.OPENROUTER_BASE_URL,
        )
    except Exception as ex:
        logger.error("Setup Error.: %s", ex)
        llm = None
    return llm


DEFAULT_LLM = get_llm()
