import Image from "next/image"
import Link from "next/link"
import styles from "./menu.module.css"

type MenuItem = {
  name: string
  description: string
  price: string
  image: string
}

const pizzas: MenuItem[] = [
  {
    name: "Pepperoni",
    description: "Classic pepperoni with mozzarella cheese",
    price: "$12.99",
    image: "/images/Pepperoni-Pizza.webp",
  },
  {
    name: "Margherita",
    description: "Fresh tomatoes, mozzarella, and basil",
    price: "$11.99",
    image: "/images/Margherita-Pizza.jpg",
  },
  {
    name: "Supreme",
    description: "Loaded with veggies and meats",
    price: "$14.99",
    image: "/images/Supreme-Pizza.jpg",
  },
  {
    name: "BBQ Chicken",
    description: "Grilled chicken with BBQ sauce",
    price: "$13.99",
    image: "/images/BBQ-Pizza.jpg",
  },
  {
    name: "Vegetarian",
    description: "Assorted vegetables and cheese",
    price: "$12.99",
    image: "/images/Vegetarian-Pizza.png",
  },
  {
    name: "Hawaiian",
    description: "Ham and pineapple",
    price: "$13.99",
    image: "/images/Hawaiian-Pizza.jpg",
  },
]

const sides: MenuItem[] = [
  {
    name: "Garlic Breadsticks",
    description: "Freshly baked breadsticks with garlic butter",
    price: "$4.99",
    image: "/images/Garlic-Bread.jpg",
  },
  {
    name: "Chicken Wings",
    description: "Crispy wings with your choice of sauce",
    price: "$8.99",
    image: "/images/Chicken-Wings.webp",
  },
  {
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with Caesar dressing",
    price: "$5.99",
    image: "/images/Caesar-Salad.jpg",
  },
]

export default function Menu() {
  return (
    <div className={styles.menu}>
      <h1 className="section-title">Our Menu</h1>

      <section>
        <h2>Pizzas</h2>
        <div className={styles.menuGrid}>
          {pizzas.map((pizza, index) => (
            <div key={index} className={`${styles.menuItem} card`}>
              <Image
                src={pizza.image || "/placeholder.svg"}
                alt={pizza.name}
                width={300}
                height={200}
                className={styles.menuImage}
              />
              <div className={styles.menuItemContent}>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                <span className={styles.price}>{pizza.price}</span>
                <Link href="#" className="btn">
                  Add to Order
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Sides</h2>
        <div className={styles.menuGrid}>
          {sides.map((side, index) => (
            <div key={index} className={`${styles.menuItem} card`}>
              <Image
                src={side.image || "/placeholder.svg"}
                alt={side.name}
                width={300}
                height={200}
                className={styles.menuImage}
              />
              <div className={styles.menuItemContent}>
                <h3>{side.name}</h3>
                <p>{side.description}</p>
                <span className={styles.price}>{side.price}</span>
                <Link href="#" className="btn">
                  Add to Order
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

