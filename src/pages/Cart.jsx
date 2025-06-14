import React from "react";
import { useCart } from "../data/CartContext";
import styles from "./Cart.module.css";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className={styles.cartWrapper}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your Cart Is Empty</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map(({ id, name, price, quantity }) => (
              <li key={id} className={styles.cartItem} data-aos="fade-up">
                <span>{name}</span>
                <span>Quantity: {quantity}</span>
                <span>${(price * quantity).toFixed(2)}</span>
                <button onClick={() => removeFromCart(id)}>Remove</button>
              </li>
            ))}
          </ul>

          <div className={styles.totalSection} data-aos="zoom-in"> 
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button className={styles.checkoutButton} onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
