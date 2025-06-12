import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, addToCart, aosDelay }) {
  const { name, price, image, desc, specs } = product;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={styles.productCard}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <img src={image} alt={name} className={styles.productImage} />
      <h2 className={styles.productName}>{name}</h2>
      <p className={styles.productDesc}>{desc}</p>
      <p className={styles.productSpecs}>{specs}</p>
      <p className={styles.productPrice}>${price}</p>
      <button
        className={styles.addToCartBtn}
        onClick={() => addToCart(product)}  
      >
        Add to Cart
      </button>
    </div>
  );
}
