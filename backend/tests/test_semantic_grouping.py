#!/usr/bin/env python3
"""セマンティックグルーピングのテストスクリプト."""

import os
import sys

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from package.util.langchain_utils import create_semantic_grouper


def test_semantic_grouping():
    """セマンティックグルーピングをテストする."""
    # テスト用の付箋データ
    test_notes = [
        "買い物リスト: りんご、バナナ、オレンジ",
        "会議の議題: プロジェクト進捗、予算確認",
        "映画鑑賞: アクション映画、コメディ",
        "今日の予定: 朝食、運動、読書",
        "食材: 牛肉、豚肉、鶏肉",
        "エンターテイメント: ゲーム、音楽、動画",
        "仕事のタスク: レポート作成、メール返信",
    ]

    print("🤖 セマンティックグルーピングテストを開始するのだ！")
    print(f"📝 テスト対象: {len(test_notes)}個の付箋")

    try:
        # セマンティックグルーパーを作成
        grouper = create_semantic_grouper()
        print("✅ セマンティックグルーパーの作成に成功したのだ！")

        # グルーピングを実行
        result = grouper.group_sticky_notes(test_notes)
        print("✅ グルーピングが完了したのだ！")

        # 結果を表示
        print(f"\n📊 グルーピング結果: {len(result.groups)}個のグループ")
        for group_name, notes in result.groups.items():
            print(f"\n🏷️  グループ: {group_name}")
            print(f"📄 説明: {result.group_descriptions.get(group_name, 'なし')}")
            for note in notes:
                print(f"   - {note}")

        return True

    except Exception as e:
        print(f"❌ エラーが発生したのだ: {e}")
        return False


if __name__ == "__main__":
    success = test_semantic_grouping()
    if success:
        print("\n🎉 テストが成功したのだ！")
    else:
        print("\n😢 テストが失敗したのだ...")
        sys.exit(1)
