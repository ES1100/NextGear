import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";
import video from "../../assets/images/video.mp4";
import { CUSTOM_ROUTES } from "../../constants/custom-routse";
import { useCart } from "../../data/CartContext";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);


  const handleCategoryClick = (categoryName) => {
    navigate(CUSTOM_ROUTES.CATEGORY(categoryName));
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className={styles.videoContainer}>
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className={styles.videoBackground}
        />
      </div>

      <div className={styles.navBar}>
        <div className={styles.navBarLeft}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="logo" width={180} />
          </Link>
        </div>
        <div className={styles.navBarRight}>
          <ul>
            <li>
              <Link to={CUSTOM_ROUTES.HOME} className={styles.navLink}>
                Home
              </Link>
            </li>
            <li
              className={styles.dropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Categories
              {isDropdownOpen && (
                <ul className={styles.dropdownMenu}>
                  <li onClick={() => handleCategoryClick("cpu")}>CPU</li>
                  <li onClick={() => handleCategoryClick("motherboards")}>
                    Motherboards
                  </li>
                  <li onClick={() => handleCategoryClick("gpu")}>GPU</li>
                  <li onClick={() => handleCategoryClick("ram")}>RAM</li>
                </ul>
              )}
            </li>
            <li>
              <Link to={CUSTOM_ROUTES.ABOUT_US} className={styles.navLink}>
                About Us
              </Link>
            </li>
            <li>
              <Link to={CUSTOM_ROUTES.CONTACT} className={styles.navLink}>
                Contact
              </Link>
            </li>
            <li className={styles.cartIconWrapper}>
              <Link to={CUSTOM_ROUTES.CART}>
                <img src={cart} alt="cart" width={30} />
                {totalItems > 0 && (
                  <span className={styles.cartCounter}>{totalItems}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header