import React from "react";
import { useCart } from "../data/CartContext";
import styles from "./Cart.module.css";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className={styles.cartWrapper}>
      <h1>Your Cart</h1>
      <ul className={styles.cartList}>
        {cartItems.map(({ id, name, price, quantity }) => (
          <li key={id} className={styles.cartItem}>
            <span>{name}</span>
            <span>Quantity: {quantity}</span>
            <span>${(price * quantity).toFixed(2)}</span>
            <button onClick={() => removeFromCart(id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
