#!/usr/bin/env python3
"""最小限のLangChainテスト"""

import os
import sys

# プロジェクトルートをPythonPathに追加
sys.path.insert(0, os.path.join(os.path.dirname(__file__)))

from langchain_core.prompts import ChatPromptTemplate

from package.chain.base import DEFAULT_LLM
from package.common import get_logger

if __name__ == "__main__":
    logger = get_logger()

    # 最小限のプロンプトテンプレート
    simple_prompt = ChatPromptTemplate.from_messages(
        [
            ("system", "あなたは付箋をグルーピングする専門家です。"),
            ("user", "以下の付箋をグルーピングしてください:\n{content}"),
        ]
    )

    # テストデータ
    test_content = (
        "- プロジェクトの進捗が遅れている\n- チーム内のコミュニケーション不足"
    )

    print("=== シンプルテスト ===")
    print(f"Content: {test_content}")

    try:
        # チェーンを作成
        chain = simple_prompt | DEFAULT_LLM

        # 実行
        result = chain.invoke({"content": test_content})
        print(f"Result: {result}")
        print(f"Result content: {result.content}")

    except Exception as e:
        print(f"Error: {e}")
        import traceback

        traceback.print_exc()
