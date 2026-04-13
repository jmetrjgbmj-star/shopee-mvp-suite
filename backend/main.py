from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
import backend.models as models
import backend.schemas as schemas
import backend.database as database
import backend.scraper_service as scraper_service
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Shopee MVP API")

# CORS設定 (Frontendからのアクセスを許可)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 起動時にDBテーブルを作成
models.Base.metadata.create_all(bind=database.engine)

@app.post("/api/products/import", response_model=List[schemas.ProductResponse])
async def import_products(payload: schemas.ProductImportRequest, db: Session = Depends(database.get_db)):
    scraper = scraper_service.AmazonScraper()
    results = []
    
    for source in payload.sources:
        asin = scraper.extract_asin(source)
        if not asin: continue
        
        # 重複チェック
        exists = db.query(models.Product).filter(models.Product.asin == asin).first()
        if exists: continue
        
        # ダミーデータ取得（将来的に実スクレイピングへ）
        data = await scraper.fetch_dummy_data(asin)
        
        new_prod = models.Product(**data)
        db.add(new_prod)
        results.append(data)
    
    db.commit()
    return results

@app.get("/api/products", response_model=List[schemas.ProductResponse])
def list_products(db: Session = Depends(database.get_db)):
    return db.query(models.Product).all()
