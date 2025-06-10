#!/usr/bin/env python3
"""シンプルなプロンプトテスト"""

import os
import sys

# プロジェクトルートをPythonPathに追加
sys.path.insert(0, os.path.join(os.path.dirname(__file__)))

from package.chain.group_sticky_notes import PROMPT
from package.common import get_logger

if __name__ == "__main__":
    logger = get_logger()

    # テスト用の入力データ
    test_input = {
        "sticky_notes": "- プロジェクトの進捗が遅れている\n- チーム内のコミュニケーション不足\n- 新機能のアイデア：チャット機能\n- UIのデザインを改善したい"
    }

    print("=== テスト入力 ===")
    print(f"Input: {test_input}")

    try:
        print("\n=== プロンプトのフォーマット ===")
        formatted_prompt = PROMPT.format_prompt(**test_input)
        print(f"Formatted prompt: {formatted_prompt}")
        print(f"Messages: {formatted_prompt.messages}")
        for i, msg in enumerate(formatted_prompt.messages):
            print(f"Message {i}: type={type(msg).__name__}, content='{msg.content}'")
    except Exception as e:
        print(f"Prompt format error: {e}")
        import traceback

        traceback.print_exc()
