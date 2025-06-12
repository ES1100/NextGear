import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./AboutUs.module.css";
import setup from "../assets/images/gaming-setup.webp";
import team from "../assets/images/team.jpg";
import customer from "../assets/images/customer.jpg";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>NextGear</h1>
          <div className={styles.statsSection} data-aos="zoom-in">
            <div className={styles.statBox}>
              <h3>Number Of Downloads</h3>
              <p className={styles.statNumber}>20,123</p>
            </div>
            <div className={styles.statBox}>
              <h3>Parts Shipped</h3>
              <p className={styles.statNumber}>14,000+</p>
            </div>
            <div className={styles.statBox}>
              <h3>Number Of Users</h3>
              <p className={styles.statNumber}>13,560</p>
            </div>
          </div>
          <h2>
            Powering Performance. Built for Gamers, Creators & Innovators.
          </h2>
          <div className={styles.section} data-aos="fade-up">
            <p>
              Welcome to NextGear — your trusted destination for premium PC
              components. Whether you're a hardcore gamer, a professional
              content creator, or someone upgrading a personal workstation, we
              offer everything you need to take your system to the next level.
              Our store is built around one idea: performance should be
              accessible, reliable, and easy to put together. No confusing
              jargon or bloated packages — just the best parts at your
              fingertips.
            </p>
          </div>
          <h2>Our Mission</h2>

          <div className={styles.section}>
            <img src={setup} alt="" data-aos="fade-right" />
            <p data-aos="fade-left">
              At NextGear, our mission is simple: deliver cutting-edge PC parts
              to anyone who values performance and longevity. We aim to
              eliminate the stress of shopping for components by offering a
              handpicked selection of products we trust and believe in. Whether
              you’re chasing max FPS, faster render times, or seamless
              multitasking, we’re here to help you build a system that keeps up.
              We believe in transparency, expert support, and helping our
              community make informed decisions every step of the way.
            </p>
          </div>
          <h2>Who We Are</h2>
          <div className={styles.section}>
            <img src={team} alt="" width={650} data-aos="fade-right" />
            <p data-aos="fade-left">
              We're a team of tech lovers and PC enthusiasts with years of
              hands-on experience in building, upgrading, and optimizing
              computers. We've built countless rigs, tested a wide range of
              hardware, and kept up with the latest trends so you don’t have to.
              At NextGear, we bring that expertise into every recommendation and
              every product we offer. We understand the difference between
              decent and exceptional — and we're committed to only offering the
              latter. Our community is everything to us, and we’re proud to
              serve builders of every level, from beginners to seasoned pros.
            </p>
          </div>

          <h2>We're Here to Help</h2>
          <div className={styles.section} data-aos="fade-up">
            <img src={customer} alt="" width={650} />
            <p>
              Our support team is always ready to help you find the right part,
              troubleshoot compatibility issues, or guide you through an
              upgrade. Have a question? Drop us a message through our contact
              page or send us a DM on social — we’re quick to respond and happy
              to help. You can also subscribe to our newsletter to stay updated
              on product launches, deals, and hardware insights. NextGear is
              more than just a store — it's a hub for people who take their
              setups seriously.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
