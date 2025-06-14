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
      <h1 data-aos="zoom-in">
        Our Top {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}{" "}
        Products
      </h1>
      <p className={styles.categoryDescription} data-aos="zoom-out">
        Discover premium-quality {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} products tailored to your needs. Whether you're looking for durability, style, or performance – we've got you covered.
      </p>
      <p className={styles.tips} data-aos="zoom-in">
        Not sure which {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} product to choose? Filter by brand or scroll through our top picks.
      </p>
      <p className={styles.limitedOffer} data-aos="fade-up">
        Limited time offer: Free shipping on all {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} orders above $50!
      </p>


      <div className={styles.brandFilter} data-aos="fade-right">
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
      <p className={styles.productCount}>
        Showing {filteredProducts.length} product(s)
      </p>

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