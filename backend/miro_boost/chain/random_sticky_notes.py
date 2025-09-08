from langchain_core.output_parsers import PydanticOutputParser
from langchain_core.prompts import (
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
)
from pydantic import BaseModel, Field

from miro_boost.chain.base import DEFAULT_LLM

# 定数定義
MIN_CONTENT_LENGTH = 3
MAX_NOTES_COUNT = 20
MIN_NOTES_COUNT = 15


class RandomResult(BaseModel):
    """データモデル."""

    random: list[str] = Field(
        description="ランダムに生成された付箋の内容をリストとする",
    )


SYSTEM_TEMPLATE = """
あなたは付箋の内容を生成する専門家です。
ブレインストーミングセッションで使用される、多様でリアルな付箋の内容を20個生成してください。
以下の条件を満たしてください:

1. 意味的に関連性のあるグループができるような内容を含める
2. 仕事、プライベート、学習、趣味など多様なカテゴリを含める
3. 各付箋の内容は1行で、簡潔で分かりやすい
4. 日本語で生成する
5. 重複しない内容にする

生成する内容の例:
- プロジェクト管理関連
- 買い物リスト
- 学習計画
- 趣味活動
- 健康管理
- 人間関係

結果は配列形式で、各付箋の内容を文字列として返してください。

{format_instructions}
"""
HUMAN_TEMPLATE = "20個の付箋内容を生成してください。"
PARSER = PydanticOutputParser(pydantic_object=RandomResult)
SYSTEM_PROMPT = SystemMessagePromptTemplate.from_template(
    SYSTEM_TEMPLATE,
    partial_variables={
        "format_instructions": PARSER.get_format_instructions(),
    },
)
HUMAN_PROMPT = HumanMessagePromptTemplate.from_template(HUMAN_TEMPLATE)
PROMPT = ChatPromptTemplate.from_messages(
    [SYSTEM_PROMPT, HUMAN_PROMPT],
)
LLM = DEFAULT_LLM
CHAIN = (PROMPT | LLM | PARSER).with_types(
    input_type=dict[str, str],
    output_type=RandomResult,
)


def random_sticky_notes() -> list[str]:
    """ランダムな付箋のリストを生成AIを用いて生成する."""
    response: RandomResult = CHAIN.invoke({})
    return response.random
