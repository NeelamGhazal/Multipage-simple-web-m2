import Link from "next/link"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h3>Pizza Palace</h3>
          <p>Delicious pizzas delivered to your door</p>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <nav className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className={styles.column}>
          <h4>Contact Us</h4>
          <p>123 Pizza Street, Foodville, FV 12345</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@pizzapalace.com</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2023 Pizza Palace. All rights reserved.</p>
        <nav className={styles.legalNav}>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  )
}

