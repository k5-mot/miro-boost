#!/usr/bin/env python3
"""グルーピング機能のデバッグテスト."""

import os
import sys

sys.path.append(os.path.join(os.path.dirname(__file__)))

from package.chain.group_sticky_notes import group_sticky_notes


def test_group_sticky_notes():
    """グルーピング機能をテストする."""
    sample_notes = [
        "ブログ記事の執筆",
        "家計簿をつける",
        "資格試験の勉強開始",
        "友人とのランチ",
        "予算管理の見直し",
    ]

    print("テスト開始...")
    print(f"入力: {sample_notes}")

    try:
        result = group_sticky_notes(sample_notes)
        print(f"結果: {result}")
        print(f"グループ数: {len(result.groups)}")

        for group_name, items in result.groups.items():
            print(f"  {group_name}: {items}")

    except Exception as e:
        print(f"エラー: {e}")
        import traceback

        traceback.print_exc()


if __name__ == "__main__":
    test_group_sticky_notes()
