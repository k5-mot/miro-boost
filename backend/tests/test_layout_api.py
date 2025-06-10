#!/usr/bin/env python3
"""Layout API のテストスクリプト."""

import json
import sys

import requests

BASE_URL = "http://localhost:8000"


def test_health_check():
    """ヘルスチェックAPIをテスト."""
    print("=== ヘルスチェックテスト ===")

    try:
        response = requests.get(f"{BASE_URL}/api/miro/layout/health", timeout=5)
        print(f"ステータスコード: {response.status_code}")
        print(f"レスポンス: {response.json()}")

        if response.status_code == 200:
            print("✅ ヘルスチェック成功!")
        else:
            print("❌ ヘルスチェック失敗")

    except Exception as e:
        print(f"❌ ヘルスチェックエラー: {e}")


def test_layout_calculation():
    """レイアウト計算APIをテスト."""
    print("\n=== レイアウト計算テスト ===")

    test_data = {
        "groups": {
            "買い物リスト": ["牛乳", "パン", "野菜", "卵"],
            "仕事タスク": ["会議準備", "資料作成", "進捗確認"],
            "趣味活動": ["映画鑑賞", "読書", "ゲーム", "音楽鑑賞", "散歩"],
            "家事": ["掃除", "洗濯"],
        }
    }

    try:
        response = requests.post(
            f"{BASE_URL}/api/miro/layout/calculate",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10,
        )

        print(f"ステータスコード: {response.status_code}")

        if response.status_code == 200:
            result = response.json()
            print("✅ レイアウト計算成功!")
            print(f"寸法: {result['dimensions']}")
            print(f"グループ数: {len(result['layout_data'])}")

            # 各グループの詳細を表示
            for group_name, layout in result["layout_data"].items():
                print(f"\nグループ: {group_name}")
                print(
                    f"  ヘッダー位置: ({layout['header']['x']}, {layout['header']['y']})"
                )
                print(f"  ヘッダー色: {layout['header']['color']}")
                print(f"  子要素数: {len(layout['children'])}")

                for i, child in enumerate(layout["children"][:3]):  # 最初の3つだけ表示
                    print(
                        f"    - {child['content']}: ({child['x']}, {child['y']}) 色:{child['color']}"
                    )

                if len(layout["children"]) > 3:
                    print(f"    ... その他 {len(layout['children']) - 3} 個")
        else:
            print(f"❌ レイアウト計算失敗: {response.text}")

    except Exception as e:
        print(f"❌ レイアウト計算エラー: {e}")


def test_invalid_data():
    """無効なデータでのエラーハンドリングをテスト."""
    print("\n=== エラーハンドリングテスト ===")

    invalid_data = {"invalid_field": "test"}

    try:
        response = requests.post(
            f"{BASE_URL}/api/miro/layout/calculate",
            json=invalid_data,
            headers={"Content-Type": "application/json"},
            timeout=5,
        )

        print(f"ステータスコード: {response.status_code}")

        if response.status_code == 422:
            print("✅ バリデーションエラーが正しく検出された!")
        else:
            print(f"❌ 予期しないレスポンス: {response.text}")

    except Exception as e:
        print(f"❌ エラーハンドリングテストエラー: {e}")


def main():
    """メイン関数."""
    print("Layout API テストスクリプト開始")
    print("=" * 50)

    # 各テストを実行
    test_health_check()
    test_layout_calculation()
    test_invalid_data()

    print("\n" + "=" * 50)
    print("テスト完了!")


if __name__ == "__main__":
    main()
