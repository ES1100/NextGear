import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import video from "../../assets/images/video.mp4";
import cart from "../../assets/images/cart.png";
import { CUSTOM_ROUTES } from "../../constants/custom-routse";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
const Header = () => {
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      navigate(CUSTOM_ROUTES.CATEGORY_DETAIL(selectedCategory));
    }
  };
}

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div className={styles.navBarLeft}>
          <Link to="/" >
            <img className={styles.logo} src={logo} alt="logo" width={180} />
          </Link>
        </div>
        <div className={styles.navBarRight}>
          <ul>
            <li>
              <Link to={CUSTOM_ROUTES.HOME} className={styles.navLink} >Home</Link>
            </li>
            <li
              className={styles.dropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <li> Categories <Link to={CUSTOM_ROUTES.CATEGORIES} ></Link></li>
             
              {isDropdownOpen && (
                <li
  className={styles.dropdown}
  onMouseEnter={() => setIsDropdownOpen(true)}
  onMouseLeave={() => setIsDropdownOpen(false)}
>
 

  {isDropdownOpen && (
    <ul className={styles.dropdownMenu}>
    <li
  className={styles.dropdown}
  onMouseEnter={() => setIsDropdownOpen(true)}
  onMouseLeave={() => setIsDropdownOpen(false)}
>
 

  {isDropdownOpen && (
    <ul className={styles.dropdownMenu}>
      <li  onClick={() => handleCategoryClick('cpu')} >
        <Link className={styles.navLink} to="/cpu">CPU</Link>
      </li>
      <li onClick={() => handleCategoryClick('motherboard')}> 
        <Link className={styles.navLink} to="/motherboards">Motherboards</Link>
      </li>
      <li onClick={() => handleCategoryClick('storage')} >
        
        <Link className={styles.navLink} to="/storage">Storage</Link>
      </li>
      <li onClick={() => handleCategoryClick('gpu')} >

        <Link className={styles.navLink} to="/gpu">GPU</Link>
      </li>
      <li onClick={() => handleCategoryClick('ram')} >
        <Link className={styles.navLink} to="/ram">RAM</Link>
      </li>
      <li onClick={() => handleCategoryClick('coolers')} >
        <Link className={styles.navLink} to="/coolers">Coolers</Link>
      </li>
      <li onClick={() => handleCategoryClick('power-supplies')}  >
        <Link className={styles.navLink} to="/power-supplies">Power Supplies</Link>
      </li>
    </ul>
  )}
</li>
    </ul>
  )}
</li>
              )}
            </li>
            <li>
              <Link to={CUSTOM_ROUTES.ABOUT_US} className={styles.navLink}>About Us</Link>
            </li>
            <li>
              <Link to={CUSTOM_ROUTES.CONTACT} className={styles.navLink}>Contact</Link>
            </li>
            <li>
              <Link to={CUSTOM_ROUTES.CART}>
                <img src={cart} alt="cart" width={30} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.videoContainer}>
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className={styles.videoBackground}
        ></video>
      </div>
    </div>
  );
};

export default Header;
