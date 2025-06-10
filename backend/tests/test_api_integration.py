#!/usr/bin/env python3
"""APIエンドポイント統合テスト."""

import json

import requests


def test_api_integration():
    """APIエンドポイントの統合テストを実行する."""
    base_url = "http://localhost:8000"

    print("🌐 API統合テストを開始するのだ！")

    # 1. ヘルスチェック
    try:
        response = requests.get(f"{base_url}/docs")
        if response.status_code == 200:
            print("✅ バックエンドサーバーが正常に稼働中なのだ！")
        else:
            print(f"❌ バックエンドサーバーのステータスが異常: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ バックエンドサーバーに接続できません: {e}")
        return False

    # 2. OpenAPI仕様チェック
    try:
        response = requests.get(f"{base_url}/openapi.json")
        if response.status_code == 200:
            openapi_spec = response.json()
            if "/api/miro/group/group-sticky-notes" in openapi_spec.get("paths", {}):
                print("✅ グルーピングAPIエンドポイントが登録されているのだ！")
            else:
                print("❌ グルーピングAPIエンドポイントが見つからない")
                return False
        else:
            print(f"❌ OpenAPI仕様の取得に失敗: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ OpenAPI仕様の取得でエラー: {e}")
        return False

    print("🎉 API統合テストが完了したのだ！")
    return True


if __name__ == "__main__":
    success = test_api_integration()
    if success:
        print("\n✨ 全てのテストが成功したのだ！")
        print("🚀 Miro-boostのセマンティックグルーピング機能の準備が完了したのだ！")
    else:
        print("\n😢 テストが失敗したのだ...")
