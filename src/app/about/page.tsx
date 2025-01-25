import Image from "next/image"
import styles from "./about.module.css"

export default function About() {
  return (
    <div className={styles.about}>
      <h1 className="section-title">About Pizza Palace</h1>

      <section className={styles.story}>
        <div className={styles.storyContent}>
          <h2>Our Story</h2>
          <p>
            Pizza Palace was founded in 2010 by two pizza-loving friends, Maria and John. What started as a small, local
            pizzeria has grown into a beloved chain, known for our delicious pizzas and commitment to quality.
          </p>
          <p>
            Our passion for creating the perfect pizza drives everything we do. From sourcing the freshest ingredients
            to perfecting our dough recipe, we're always striving to deliver the best pizza experience to our customers.
          </p>
        </div>
        <Image
          src="/images/Pizzeria.jpg"
          alt="Pizza Palace Founders"
          width={600}
          height={400}
          className={styles.storyImage}
        />
      </section>

      <section className={styles.mission}>
        <h2 className="section-title">Our Mission</h2>
        <p>
          At Pizza Palace, our mission is simple: to bring joy to people's lives through delicious, high-quality pizzas
          and exceptional customer service. We believe that a great pizza has the power to bring people together and
          create lasting memories.
        </p>
      </section>

      <section className={styles.values}>
        <h2 className="section-title">Our Values</h2>
        <div className={styles.valueGrid}>
          <div className={styles.valueCard}>
            <h3>Quality</h3>
            <p>We use only the finest ingredients and never compromise on taste or quality.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Innovation</h3>
            <p>We're always exploring new flavors and techniques to keep our menu exciting and fresh.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Community</h3>
            <p>We're committed to giving back to the communities we serve and supporting local initiatives.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Sustainability</h3>
            <p>We strive to minimize our environmental impact through responsible sourcing and practices.</p>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <h2 className="section-title">Meet Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <h3>Maria</h3>
            <p>Co-founder & Head Chef</p>
          </div>
          <div className={styles.teamMember}>
            <h3>John</h3>
            <p>Co-founder & Operations Manager</p>
          </div>
          <div className={styles.teamMember}>
            <h3>Lisa</h3>
            <p>Senior Pizza Artist</p>
          </div>
          <div className={styles.teamMember}>
            <h3>Mike</h3>
            <p>Delivery Manager</p>
          </div>
        </div>
      </section>
    </div>
  )
}

