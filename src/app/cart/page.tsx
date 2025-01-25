"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaTrash } from "react-icons/fa"
import styles from "./cart.module.css"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Pepperoni Pizza", price: 14.99, quantity: 2, image: "/images/Pepperoni-Pizza.webp" },
    { id: 2, name: "Margherita Pizza", price: 12.99, quantity: 1, image: "/images/Margherita-Pizza.jpg" },
    { id: 3, name: "Garlic Breadsticks", price: 4.99, quantity: 1, image: "/images/Garlic-Bread.jpg" },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(
      cartItems
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={styles.cart}>
      <h1 className="section-title">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Your cart is empty.</p>
          <Link href="/menu" className="btn">
            Go to Menu
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={100}
                  height={100}
                  className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <div className={styles.itemActions}>
                  <div className={styles.quantity}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryItem}>
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Delivery Fee:</span>
              <span>$5.00</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Tax:</span>
              <span>${(total * 0.08).toFixed(2)}</span>
            </div>
            <div className={`${styles.summaryItem} ${styles.total}`}>
              <span>Total:</span>
              <span>${(total + 5 + total * 0.08).toFixed(2)}</span>
            </div>
            <button className="btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  )
}

