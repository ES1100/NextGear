import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import logo from "../../assets/images/logo.png";
import styles from "./LandingPage.module.css";
import gpuImage from "../../assets/images/gpu-01.jpeg";
import cpuImage from "../../assets/images/cpu-01.jpg";
import pwuImage from "../../assets/images/pwu-01.avif";
import coolerImage from "../../assets/images/cooler-01.jpg";

const LandingPage = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);
  return (
    <>
      <div className={styles.containerdesc}  >
        <h1>Welcome To Our Store!</h1>
        <p data-aos="zoom-in" >
          Explore a wide range of high-performance PC parts including CPUs,
          GPUs, RAM, storage solutions, motherboards, coolers, power supplies,
          and more. Each product in our collection is carefully selected from
          trusted brands to ensure the highest levels of compatibility,
          reliability, and performance. Whether you're a gamer, content creator,
          or professional looking to build or upgrade your rig, we provide
          quality components that meet your specific needs. Our goal is to help
          you create a powerful and efficient PC tailored to your demands.
        </p>
        <h1>Why Choose NextGear?</h1>
        <p data-aos="zoom-in" >
          At NextGear, we make building your dream PC simple and hassle-free
          with real-time compatibility checks to ensure all your components work
          perfectly together. We prioritize secure transactions and protect your
          data, so you can shop with confidence. Our store is designed to be
          fully responsive, providing a seamless shopping experience on any
          device. Enjoy fast shipping and reliable customer support that’s
          always ready to assist you. Join thousands of satisfied customers who
          trust NextGear for their PC building needs.
        </p>
        <h1>Featured Components </h1>

        <div className={styles.cards}>
          <div className={styles.card} data-aos="fade-right" >
            <img src={gpuImage} alt="gpu-image" />
            <h3>NVIDIA GeForce RTX 4090</h3>
            <span>
              Unleash extreme performance with the RTX 4090. Powered by Ada
              Lovelace architecture, it features 24GB GDDR6X, cutting-edge ray
              tracing, and DLSS 3 for ultra-smooth 4K gaming and AI workloads.
            </span>
            <button>Add To Cart</button>
          </div>
          <div className={styles.card} data-aos="fade-down" >
            <img src={cpuImage} alt="cpu-image" />
            <h3>Intel Core i9-13900K</h3>
            <span>
              The i9-13900K delivers elite performance with 24 cores and 32
              threads. Built on the Raptor Lake architecture, it’s ideal for
              gaming, content creation, and multitasking at the highest level.
            </span>
            <button>Add To Cart</button>
          </div>{" "}
          <div className={styles.card} data-aos="fade-up" >
            <img src={pwuImage} alt="pwu-image" />
            <h3>Corsair RM850x (850W)</h3>
            <span>
              Reliable and efficient, the RM850x delivers quiet, fully modular
              power with 80 Plus Gold certification—ideal for powering high-end
              GPUs and CPUs with headroom to spare.
            </span>
            <button>Add To Cart</button>
          </div>
          <div className={styles.card} data-aos="fade-left" >
            <img src={coolerImage} alt="cooler-image" />
            <h3>Noctua NH-D15</h3>
            <span>
              Renowned for its silent cooling and premium build, the NH-D15 is a
              dual-tower air cooler that delivers exceptional thermal
              performance—ideal for overclocked CPUs and quiet setups.
            </span>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
      <h1>What Our Customers Say</h1>
      <div className={styles.testimonialCards}>
        <div className={styles.testimonialCard} data-aos="fade-right" >
          <p>
            "Absolutely blown away by the performance. The RTX 4090 runs
            everything maxed out!"
          </p>
          <h4 className={styles.author}>— Alex R.</h4>
        </div>
        <div className={styles.testimonialCard} data-aos="fade-up" >
          <p>
            "The build quality and cooling on the NH-D15 is unmatched. Silent
            and powerful."
          </p>
          <h4 className={styles.author}>— Jamie L.</h4>
        </div>
        <div className={styles.testimonialCard} data-aos="fade-left" >
          <p>
            "Smooth installation and perfect compatibility with my Z790 board.
            Highly recommended!"
          </p>
          <h4 className={styles.author}>— Morgan T.</h4>
        </div>
      </div>
     
    </>
  );
};

export default LandingPage;
