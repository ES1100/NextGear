import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products"; // Adjust the path
import ProductCard from "../components/ProductCard";
import styles from "./CategoryPage.module.css";

export default function CategoryPage() {
  const { categoryName } = useParams();

  // Step 1: Filter products by category
  const filteredByCategory = products.filter(
    (product) => product.category === categoryName
  );

  // Step 2: Get unique brands in this category
  const uniqueBrands = [
    ...new Set(filteredByCategory.map((product) => product.brand)),
  ];

  // Step 3: Manage brand filter state
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Step 4: Filter by brand if selected
  const filteredProducts =
    selectedBrand === "All"
      ? filteredByCategory
      : filteredByCategory.filter((product) => product.brand === selectedBrand);

  return (
    <div className={styles.categoryWrapper}>
      <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Products</h1>

      <div className={styles.filterWrapper}>
        <label htmlFor="brandFilter">Filter by Brand:</label>
        <select
          id="brandFilter"
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
          filteredProducts.map(({ id, name, price, image, desc, specs }, index) => (
            <ProductCard
              key={id}
              name={name}
              price={price}
              image={image}
              desc={desc}
              specs={specs}
              aosDelay={index * 150} // optional animation delay
            />
          ))
        )}
      </div>
    </div>
  );
}
