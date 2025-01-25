import Link from "next/link";
import { FaPizzaSlice, FaTruck, FaLeaf } from "react-icons/fa";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Delicious Pizza Delivered to Your Door
          </h1>
          <p className={styles.heroSubtitle}>
            Experience the taste of perfection with Pizza Palace
          </p>
          <div className={styles.heroButtons}>
            <Link
              href="/menu"
              className={`${styles.heroButton} ${styles.primaryButton}`}
            >
              View Menu
            </Link>
            <Link
              href="/order"
              className={`${styles.heroButton} ${styles.secondaryButton}`}
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <FaPizzaSlice className={styles.icon} />
          <h3>Artisanal Pizzas</h3>
          <p>
            Handcrafted with the finest ingredients for an unforgettable taste
            experience
          </p>
        </div>
        <div className={styles.feature}>
          <FaTruck className={styles.icon} />
          <h3>Fast Delivery</h3>
          <p>
            Hot and fresh pizzas delivered to your doorstep in 30 minutes or
            less
          </p>
        </div>
        <div className={styles.feature}>
          <FaLeaf className={styles.icon} />
          <h3>Fresh Ingredients</h3>
          <p>
            We use only the freshest, locally-sourced ingredients for our pizzas
          </p>
        </div>
      </section>

      <section className={styles.popularPizzas}>
        <h2 className="section-title">Our Popular Pizzas</h2>
        <div className={styles.pizzaGrid}>
          <div className={`${styles.pizzaCard} card`}>
            <img
              src="/images/Pepperoni-Pizza.webp"
              alt="Pepperoni Pizza"
              className={styles.pizzaImage}
            />
            <div className={styles.pizzaContent}>
              <h3>Pepperoni Pizza</h3>
              <p>
                Classic pepperoni with mozzarella cheese on our signature crust
              </p>
              <span className={styles.price}>$14.99</span>
              <Link href="/order" className="btn">
                Order Now
              </Link>
            </div>
          </div>
          <div className={`${styles.pizzaCard} card`}>
            <img
              src="/images/Margherita-Pizza.jpg"
              alt="Margherita Pizza"
              className={styles.pizzaImage}
            />
            <div className={styles.pizzaContent}>
              <h3>Margherita Pizza</h3>
              <p>
                Fresh tomatoes, mozzarella, and basil on a thin, crispy crust
              </p>
              <span className={styles.price}>$13.99</span>
              <Link href="/order" className="btn">
                Order Now
              </Link>
            </div>
          </div>
          <div className={`${styles.pizzaCard} card`}>
            <img
              src="/images/Supreme-Pizza.jpg"
              alt="Supreme Pizza"
              className={styles.pizzaImage}
            />
            <div className={styles.pizzaContent}>
              <h3>Supreme Pizza</h3>
              <p>
                Loaded with veggies and meats for the ultimate pizza experience
              </p>
              <span className={styles.price}>$16.99</span>
              <Link href="/order" className="btn">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.specialOffer}>
        <div className={styles.offerContent}>
          <h2>Special Offer</h2>
          <p>
            Get 20% off on your first order when you sign up for our newsletter!
          </p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn">
              Sign Up
            </button>
          </form>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2 className="section-title">What Our Customers Say</h2>
        <div className={styles.testimonialGrid}>
          <div className={`${styles.testimonialCard} card`}>
            <p>"The best pizza I've ever had! Fast delivery and always hot."</p>
            <span className={styles.customerName}>- Sarah M.</span>
          </div>
          <div className={`${styles.testimonialCard} card`}>
            <p>
              "Pizza Palace never disappoints. Their Supreme pizza is to die
              for!"
            </p>
            <span className={styles.customerName}>- John D.</span>
          </div>
          <div className={`${styles.testimonialCard} card`}>
            <p>
              "Great variety and excellent customer service. My go-to for pizza
              night!"
            </p>
            <span className={styles.customerName}>- Emily R.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
