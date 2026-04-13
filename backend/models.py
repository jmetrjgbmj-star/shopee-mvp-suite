from sqlalchemy import Column, Integer, String, Text, Numeric, ARRAY
from .database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    asin = Column(String, unique=True, index=True)
    original_title = Column(Text)
    original_description = Column(Text)
    original_price = Column(Numeric(10, 2))
    original_images = Column(ARRAY(String)) # PostgreSQLの配列型
    status = Column(String, default="draft")
