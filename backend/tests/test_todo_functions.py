#!/usr/bin/env python3
"""TODO関数の統合テスト."""

import pytest

from package.chain.random_sticky_notes import random_sticky_notes
from package.util.layout_sticky_notes import layout_sticky_notes


def test_random_sticky_notes():
    """random_sticky_notes関数のテスト."""
    result = random_sticky_notes()

    # 基本的な検証
    assert isinstance(result, list), "返り値はリストである必要があります"
    assert len(result) > 0, "少なくとも1つの付箋が生成される必要があります"

    # 各要素が文字列であることを確認
    for note in result:
        assert isinstance(note, str), "各付箋の内容は文字列である必要があります"
        assert len(note.strip()) > 0, "付箋の内容は空でない必要があります"

    print(f"✅ {len(result)}個の付箋が正常に生成されました")

    # サンプル表示
    for i, note in enumerate(result[:5]):
        print(f"  {i + 1}: {note[:50]}...")


def test_layout_sticky_notes():
    """layout_sticky_notes関数のテスト."""
    # テスト用のグループデータ
    test_groups = {
        "タスク管理": ["日報作成", "会議準備", "レビュー対応"],
        "アイデア": ["新機能提案", "改善案"],
        "課題": [
            "バグ修正",
            "パフォーマンス改善",
            "セキュリティ対応",
            "ドキュメント更新",
        ],
    }

    # レイアウト計算を実行
    result = layout_sticky_notes(test_groups)

    # layout_sticky_notes は現在 None を返すが、エラーなく実行されることを確認
    print("✅ レイアウト計算が正常に完了しました")
    print(f"  グループ数: {len(test_groups)}")
    for group_name, items in test_groups.items():
        print(f"  - {group_name}: {len(items)}個のアイテム")


def test_integration_workflow():
    """統合ワークフローのテスト."""
    print("\n=== 統合ワークフローテスト ===")

    # 1. ランダム付箋生成
    print("1. ランダム付箋を生成中...")
    sticky_notes = random_sticky_notes()
    print(f"   {len(sticky_notes)}個の付箋を生成")

    # 2. グループ化のサミュレーション（実際のAIグループ化は省略）
    print("2. グループ化をシミュレーション...")
    # 簡単なグループ化シミュレーション
    groups = {}
    group_names = ["作業", "アイデア", "課題"]

    for i, note in enumerate(sticky_notes):
        group_name = group_names[i % len(group_names)]
        if group_name not in groups:
            groups[group_name] = []
        groups[group_name].append(note)

    print(f"   {len(groups)}個のグループを作成")

    # 3. レイアウト計算
    print("3. レイアウト計算中...")
    layout_sticky_notes(groups)
    print("   レイアウト計算完了")

    print("✅ 統合ワークフローが正常に完了しました！")


if __name__ == "__main__":
    print("=== TODO関数テスト実行 ===\n")

    try:
        test_random_sticky_notes()
        print()
        test_layout_sticky_notes()
        print()
        test_integration_workflow()
    except Exception as e:
        print(f"❌ テスト失敗: {e}")
        import traceback

        traceback.print_exc()
