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
      <h1 data-aos="fade-down" >
        Our Top {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}{" "}
        Products
      </h1>

      <div className={styles.brandFilter} data-aos="fade-up">
        <label htmlFor="brand-select">Filter by Brand:</label>
        <select
          id="brand-select"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="All">All</option>
          {uniqueBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.cardGrid}>
        {filteredProducts.length === 0 ? (
          <p>No products found for this filter.</p>
        ) : (
          filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              className={styles.productCard}
              dataAos="fade-up"
              dataAosDelay={index * 150}
            />
          ))
        )}
      </div>
    </div>
  );
}
