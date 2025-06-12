import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import styles from "./CategoryPage.module.css";
import { useCart } from "../data/CartContext"; 

export default function CategoryPage() {
  const { categoryName } = useParams();
  const filteredByCategory = products.filter(
    (product) => product.category === categoryName
  );

  const { addToCart } = useCart(); 

  const uniqueBrands = [
    ...new Set(filteredByCategory.map((product) => product.brand)),
  ];
  const [selectedBrand, setSelectedBrand] = useState("All");

  const filteredProducts =
    selectedBrand === "All"
      ? filteredByCategory
      : filteredByCategory.filter((product) => product.brand === selectedBrand);

  return (
    <div className={styles.categoryWrapper}>
      <h1>Our Top {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Products</h1>
      <div className={styles.cardGrid}>
        {filteredProducts.length === 0 ? (
          <p>No products found for this filter.</p>
        ) : (
          filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}           
              addToCart={addToCart}       
              aosDelay={index * 150}
            />
          ))
        )}
      </div>
    </div>
  );
}
