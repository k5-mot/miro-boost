from langchain_core.output_parsers import PydanticOutputParser
from langchain_core.prompts import (
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
)
from langchain_core.runnables import RunnableLambda
from pydantic import BaseModel, Field

from miro_boost.chain.base import DEFAULT_LLM
from miro_boost.common import get_logger, get_settings

logger = get_logger()
settings = get_settings()


class GroupingResult(BaseModel):
    """グルーピング結果の構造."""

    groups: dict[str, list[str]] = Field(
        description="グループ名をキーとし、そのグループに属する付箋の内容をリストとする辞書",
    )
    # group_descriptions: dict[str, str] = Field(description="各グループの説明文")


SYSTEM_TEMPLATE = """
あなたは付箋の内容を意味論的にグルーピングする専門家です。
与えられた付箋の内容を分析し、意味的に関連性の高いものをグループに分けてください。

付箋の内容:
{sticky_notes}

グルーピングの指針:
1. 意味的に関連性の高い付箋を同じグループにまとめる
2. グループ数は3~7個程度が理想的
3. 各グループには適切な日本語の名前を付ける
4. 単独のグループになる付箋は「その他」グループにまとめる
5. グループ名は簡潔で分かりやすいものにする

以下のJSON形式で回答してください:

{format_instructions}
"""
HUMAN_TEMPLATE = ""
PARSER = PydanticOutputParser(pydantic_object=GroupingResult)
SYSTEM_PROMPT = SystemMessagePromptTemplate.from_template(
    template=SYSTEM_TEMPLATE,
    partial_variables={"format_instructions": PARSER.get_format_instructions()},
)
HUMAN_PROMPT = HumanMessagePromptTemplate.from_template(HUMAN_TEMPLATE)
PROMPT = ChatPromptTemplate.from_messages([SYSTEM_PROMPT, HUMAN_PROMPT])
LLM = DEFAULT_LLM


def preprocess(inputs: dict[str, list[str]]) -> str:
    """Process inputs."""
    # list[str]をMarkdown形式のリスト形式に変換.
    content = "\n".join([f"- {note}" for note in inputs["sticky_notes"]])
    logger.debug("Preprocessed content: %s", content)
    return {"sticky_notes": content}


CHAIN = (
    {"sticky_notes": RunnableLambda(preprocess)} | PROMPT | LLM | PARSER
).with_types(
    input_type=dict[str, any],
    output_type=GroupingResult,
)


def group_sticky_notes(
    sticky_notes: list[str],
) -> GroupingResult:
    """付箋を意味論的にグルーピングする."""
    if not sticky_notes:
        return GroupingResult(groups={})

    try:
        # logger.debug("Input sticky_notes: %s", sticky_notes)
        result = CHAIN.invoke({"sticky_notes": sticky_notes})
        logger.info("Chain result: %s", result)
        return result
    except Exception as e:
        logger.error("AI グルーピングでエラー: %s", e)
        return GroupingResult(groups={})
