"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={styles.contact}>
      <h1 className="section-title">Contact Us</h1>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h2>Get in Touch</h2>
          <p>
            We'd love to hear from you! Whether you have a question about our
            menu, want to place an order, or just want to say hello, feel free
            to reach out to us.
          </p>
          <ul className={styles.contactDetails}>
            <li>
              <FaPhone className={styles.icon} />
              <span>(555) 123-4567</span>
            </li>
            <li>
              <FaEnvelope className={styles.icon} />
              <span>info@pizzapalace.com</span>
            </li>
            <li>
              <FaMapMarkerAlt className={styles.icon} />
              <span>123 Pizza Street, Foodville, FV 12345</span>
            </li>
          </ul>
          <h3>Hours of Operation</h3>
          <ul className={styles.hours}>
            <li>Monday - Thursday: 11:00 AM - 10:00 PM</li>
            <li>Friday - Saturday: 11:00 AM - 11:00 PM</li>
            <li>Sunday: 12:00 PM - 9:00 PM</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <h2>Send Us a Message</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>

      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841200125976!2d-73.98570668459449!3d40.74881297932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794291452!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
