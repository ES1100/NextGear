
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Contact.module.css";
import pin from "../assets/images/pin.png";
import phone from "../assets/images/phone-call.png";
import mail from "../assets/images/mail.png";
import workHours from "../assets/images/time-management.png";
import AOS from "aos";
import "aos/dist/aos.css";

import { db } from "../Firebase/firebase";  // import only db from your firebase config file
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: new Date(),
      });

      alert("Thanks for reaching out! We'll get back to you soon.");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error. Please try again.");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Get In Touch And Contact NextGear!</h1>
          <p data-aos="zoom-in">
            We’d love to hear from you — whether it’s a question, suggestion, or feedback. Our team is here to help with product inquiries, order details, compatibility questions, or anything else you might need.
            Don’t hesitate to reach out — we aim to respond quickly and ensure your experience with NextGear is smooth and satisfying.
          </p>
          <h1>Have Some Questions?</h1>
        </div>

        <div className={styles.contactContainer}>
          <div className={styles.contactInfo} data-aos="fade-right">
            <h2>Our Contact Info</h2>
            <span>
              <img src={pin} alt="pin" width={30} height={30} />
              Contact Address: Karposh 1000, Skopje
            </span>
            <span>
              <img src={phone} width={30} height={30} alt="phone" />
              Phone Number: +389 70 877 342
            </span>
            <span>
              <img src={mail} alt="mail" width={30} height={30} />
              Email: support@nextgear.com
            </span>
            <span>
              <img src={workHours} alt="workHours" width={30} height={30} />
              Business Hours: Mon - Fri 9AM - 6PM
            </span>
            <div className={styles.socials}>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a>
              <a href="https://x.com" target="_blank" rel="noreferrer">X (Twitter)</a>
            </div>
          </div>

          <form data-aos="fade-left" className={styles.contactForm} onSubmit={handleSubmit}>
            <h2>Plug Into Support</h2>

            <input
              type="text"
              name="firstName"
              placeholder="Enter Your First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Enter Your Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>Select a Subject</option>
              <option value="inquiry">General Inquiry</option>
              <option value="product">Product Question</option>
              <option value="feedback">Feedback</option>
              <option value="support">Support Request</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className={styles.location} data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1762.9416758610287!2d21.399151621218454!3d42.00236431469894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354146ed2aaff4b%3A0xdd79f5654c79d7e7!2sKarposh%2C%201000%20Skopje!5e0!3m2!1sen!2smk!4v1747512715432!5m2!1sen!2smk"
            width="800"
            height="600"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>
            You can find us at our main office, where all the tech magic happens! Feel free to visit or reach out to us during business hours.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
