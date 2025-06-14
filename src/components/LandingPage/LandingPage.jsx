import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./LandingPage.module.css";
import { useCart } from "../../data/CartContext";
import products from "../../data/products";

const LandingPage = () => {
  const { addToCart } = useCart();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Pick 4 random products only once
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    setFeaturedProducts(shuffled.slice(0, 4));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading} data-aos="zoom-out">Welcome To Our Store!</h1>
      <p className={styles.paragraph} data-aos="zoom-in">
        Explore a wide range of high-performance PC parts including CPUs, GPUs,
        RAM, Motherboards, and more.
      </p>

      <h1 className={styles.heading} data-aos="zoom-out">Why Choose NextGear?</h1>
      <p className={styles.paragraph} data-aos="zoom-in">
        At NextGear, we make building your dream PC simple and hassle-free with
        real-time compatibility checks. Enjoy fast shipping and reliable
        customer support that’s always ready to assist you.
      </p>

      <h1 className={styles.heading} data-aos="zoom-out">Featured Components</h1>
      <div className={styles.cards}>
        {featuredProducts.map((product) => (
          <div key={product.id} className={styles.card} data-aos="fade-up">
            <img
              src={product.image}
              alt={product.name}
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>{product.name}</h3>
            <p className={styles.cardText}>{product.desc}</p>
            <p className={styles.cardPrice}>${product.price}</p>
            <button
              className={styles.button}
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <h1 className={styles.heading} data-aos="zoom-out">What Our Customers Say</h1>
      <div className={styles.testimonialCards}>
        <div className={styles.testimonialCard} data-aos="fade-right">
          <p>
            "Absolutely blown away by the performance. The RTX 4090 runs
            everything maxed out!"
          </p>
          <h4 className={styles.author}>— Alex R.</h4>
        </div>
        <div className={styles.testimonialCard} data-aos="fade-up">
          <p>
           "Super fast and reliable! The Crucial Ballistix gave my system the boost it needed!"
          </p>
          <h4 className={styles.author}>— Jamie L.</h4>
        </div>
        <div className={styles.testimonialCard} data-aos="fade-left">
          <p>
            "This CPU is an absolute beast! The i9-9900KS tears through games like its nothing!"
          </p>
          <h4 className={styles.author}>— Morgan T.</h4>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
