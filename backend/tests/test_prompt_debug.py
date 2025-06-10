#!/usr/bin/env python3
"""プロンプト構成のデバッグテスト"""

import os
import sys

# プロジェクトルートをPythonPathに追加
sys.path.insert(0, os.path.join(os.path.dirname(__file__)))

from package.chain.group_sticky_notes import PROMPT, SYSTEM_PROMPT

if __name__ == "__main__":
    print("=== SYSTEM_PROMPT のデバッグ ===")
    print(f"SYSTEM_PROMPT: {SYSTEM_PROMPT}")

    print("\n=== PROMPT のデバッグ ===")
    print(f"PROMPT: {PROMPT}")

    print("\n=== PROMPT.format_prompt のテスト ===")
    test_input = {
        "sticky_notes": "- プロジェクトの進捗が遅れている\n- チーム内のコミュニケーション不足"
    }

    try:
        formatted_prompt = PROMPT.format_prompt(**test_input)
        print(f"Formatted prompt: {formatted_prompt}")
        print(f"Formatted prompt messages: {formatted_prompt.messages}")
        for i, msg in enumerate(formatted_prompt.messages):
            print(f"Message {i}: {msg}")
            print(f"Message {i} content: {msg.content}")
    except Exception as e:
        print(f"Format error: {e}")
        import traceback

        traceback.print_exc()
