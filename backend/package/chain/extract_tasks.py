from langchain_core.output_parsers import PydanticOutputParser
from langchain_core.prompts import (
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
)
from langchain_core.runnables import RunnableLambda
from pydantic import BaseModel, Field

from package.chain.base import DEFAULT_LLM
from package.common import get_logger, get_settings

logger = get_logger()
settings = get_settings()


class TaskExtractionResult(BaseModel):
    """タスク抽出結果の構造."""

    tasks: list[str] = Field(
        description="抽出されたタスクのリスト。各タスクは具体的で実行可能な内容にする"
    )


SYSTEM_TEMPLATE = """
あなたは付箋の内容からタスクを抽出する専門家です。
与えられた付箋の内容を分析し、具体的で実行可能なタスクを抽出してください。

付箋の内容:
{sticky_notes}

タスク抽出の指針:
1. 各付箋の内容から具体的で実行可能なタスクを抽出する
2. 大きなタスクは小さなタスクに分解する
3. 1つの付箋から複数のタスクが抽出されても良い
4. タスクは動詞で始まる行動指向の文にする
5. 期限や担当者は含めない
6. 重複するタスクは統合する
7. 各タスクは1文で表現する

良いタスクの例:
- 「ユーザーインタビューを実施する」
- 「競合分析レポートを作成する」
- 「データベース設計書を更新する」

悪いタスクの例:
- 「検討する」(曖昧すぎる)
- 「来週までにレポートを田中さんが作成する」(期限・担当者を含む)

以下のJSON形式で回答してください:

{format_instructions}
"""
HUMAN_TEMPLATE = ""
PARSER = PydanticOutputParser(pydantic_object=TaskExtractionResult)
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
    output_type=TaskExtractionResult,
)


def extract_tasks_from_sticky_notes(
    sticky_notes: list[str],
) -> TaskExtractionResult:
    """付箋の内容から具体的なタスクを抽出する."""
    if not sticky_notes:
        return TaskExtractionResult(tasks=[])

    try:
        result = CHAIN.invoke({"sticky_notes": sticky_notes})
        logger.info("Task extraction result: %s", result)
        return result
    except Exception as e:
        logger.error("AI タスク抽出でエラー: %s", e)
        return TaskExtractionResult(tasks=[])
