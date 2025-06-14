import React, { useState } from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.png";
import { CUSTOM_ROUTES } from "../../constants/custom-routse";
import { Link } from "react-router-dom";
import { db } from "../../Firebase/firebase";
import { addDoc, collection } from "firebase/firestore";


const Footer = () => {

  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      await addDoc(collection(db, "subscribers"), {
        email: email,
        subscribedAt: new Date(),
      });

      alert("You're subscribed! ✅");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Failed to subscribe. Try again.");
    }
  };
  return (
    <>
      <footer className={styles.footerWrapper}>
        <div className={styles.columns}>
          <div className={styles.footerLogo}>
            <img src={logo} alt="logo" width={175} />
            <p>Built for gamers...</p>
          </div>

          <div className={styles.column}>
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link
                  to={CUSTOM_ROUTES.HOME}
                  className={styles.navLink}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to={CUSTOM_ROUTES.CATEGORIES}
                  className={styles.navLink}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to={CUSTOM_ROUTES.ABOUT_US}
                  className={styles.navLink}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={CUSTOM_ROUTES.CONTACT}
                  className={styles.navLink}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact
                </Link>
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
   <form className={styles.newsletter} onSubmit={handleSubscribe}>
  <label htmlFor="email">Stay Updated!</label>
  <div className={styles.emailInput}>
    <input
      type="email"
      id="email"
      placeholder="Enter Your Email Here"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
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
