import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <>
     <footer className={styles.footerWrapper}>
  <div className={styles.columns}>
    <div className={styles.footerLogo}>
      <img src={logo} alt="logo" width={400} />
      <p>Built for gamers...</p>
    </div>

          <div className={styles.column}>
            <h5>Quick Links</h5>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#categories">Categories</a>
              </li>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h5>Follow Us</h5>
            <ul className={styles.socials}>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
          <form
            className={styles.newsletter}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for subscribing!");
            }}
          >
            <label htmlFor="email">Stay Updated!</label>
            <div className={styles.emailInput}>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email Here"
                required
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>

       <div className={styles.footerBottom}>
      <p>© 2025 NextGear. All rights reserved.</p>
    </div>
      </footer>
    </>
  );
};

export default Footer;
