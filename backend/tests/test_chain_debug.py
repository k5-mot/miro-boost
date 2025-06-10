#!/usr/bin/env python3
"""チェーンのデバッグテスト"""

import os
import sys

# プロジェクトルートをPythonPathに追加
sys.path.insert(0, os.path.join(os.path.dirname(__file__)))

from package.chain.group_sticky_notes import CHAIN, group_sticky_notes, preprocess
from package.common import get_logger

if __name__ == "__main__":
    logger = get_logger()

    # テストデータ
    test_notes = [
        "プロジェクトの進捗が遅れている",
        "チーム内のコミュニケーション不足",
        "新機能のアイデア：チャット機能",
        "UIのデザインを改善したい",
    ]

    print("=== テストデータ ===")
    print(f"test_notes: {test_notes}")

    print("\n=== preprocess関数のテスト ===")
    processed = preprocess(test_notes)
    print(f"Processed content: {processed}")

    print("\n=== CHAINの入力データ構造テスト ===")
    chain_input = test_notes
    print(f"Chain input: {chain_input}")

    try:
        print("\n=== CHAINの実行テスト ===")
        result = CHAIN.invoke(chain_input)
        print(f"Chain result: {result}")
        print(f"Result type: {type(result)}")
    except Exception as e:
        print(f"Chain error: {e}")
        import traceback

        traceback.print_exc()

    print("\n=== group_sticky_notes関数のテスト ===")
    try:
        result = group_sticky_notes(test_notes)
        print(f"Function result: {result}")
        print(f"Result type: {type(result)}")
    except Exception as e:
        print(f"Function error: {e}")
        import traceback

        traceback.print_exc()
