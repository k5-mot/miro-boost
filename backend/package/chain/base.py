from langchain_google_genai import ChatGoogleGenerativeAI

from package.common import get_logger, get_settings

logger = get_logger()
settings = get_settings()
DEFAULT_LLM = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash",
    google_api_key=settings.GOOGLE_API_KEY,
    temperature=0.1,
    max_tokens=2048,
)
