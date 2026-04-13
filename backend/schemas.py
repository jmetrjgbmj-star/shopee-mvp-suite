from pydantic import BaseModel, HttpUrl
from typing import List, Optional

class ProductImportRequest(BaseModel):
    sources: List[str]

class ProductResponse(BaseModel):
    asin: str
    original_title: str
    original_description: Optional[str]
    original_price: float
    original_images: List[str]
    status: str

    class Config:
        from_attributes = True
