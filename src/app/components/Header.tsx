"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import styles from "./Header.module.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <span className={styles.pizzaSlice}>🍕</span> Pizzeria
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>
      <ul className={`${styles.navItems} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.cartIcon}>
        <Link href="/cart">
          <ShoppingCart size={24} />
        </Link>
      </div>
    </nav>
  )
}

export default Header;

