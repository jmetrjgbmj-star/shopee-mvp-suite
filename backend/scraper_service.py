import re
from typing import Optional

class AmazonScraper:
    def extract_asin(self, input_str: str) -> Optional[str]:
        """URLまたは文字列からASINを抽出"""
        asin_match = re.search(r"([A-Z0-9]{10})", input_str)
        return asin_match.group(1) if asin_match else None

    async def fetch_dummy_data(self, asin: str) -> dict:
        """現在はダミーデータを返却（将来的にここを実スクレイピングへ変更）"""
        return {
            "asin": asin,
            "original_title": f"【Amazon.co.jp限定】Sample Product {asin}",
            "original_description": "商品の詳細説明がここに入ります。シンガポール向けに翻訳予定。",
            "original_price": 5000.0,
            "original_images": ["https://placeholder.com"],
            "status": "draft"
        }
