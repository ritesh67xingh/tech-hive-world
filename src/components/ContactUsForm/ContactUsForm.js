import React, { useState } from "react";
import styles from './ContactUsForm.module.css';
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const [formContent, setFormContent] = useState({});
  const [status, setStatus] = useState(""); // for success/failure message

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormContent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_86xianw",       // your Service ID
        "template_yeriafo",      // your Template ID
        formContent,             // data from your form
        "nZEZgXjgxnNLdfbK9"      // your Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("✅ Message sent successfully!");
          setFormContent({}); // clear form
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <>
      <div className={`container ${styles.contain} overflow-hidden`}>
        <p data-aos="fade-up" className={`${styles.heading} mx-auto`}>
          We&apos;d Love to Hear From You
        </p>

        {/* Contact Info */}
        <div className="row">
          <div className="col-md-4" data-aos="fade-right">
            <p className={styles.head}>Address</p>
            <p className={styles.content}>SGR Prestige, Patel Layout, Marathahalli</p>
            <p className={styles.content}>Bangalore – 560037, India</p>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-offset="100">
            <p className={styles.head}>Contact</p>
            <p className={styles.content}>Mobile : (+91) 99025 77178</p>
            <p className={styles.content}>Phone : (+91) 84098 01459</p>
            <p className={styles.content}>Email: info@techhiveworld.com</p>
          </div>

          <div className="col-md-4" data-aos="fade-left" data-aos-offset="70">
            <p className={styles.head}>Working Hours</p>
            <p className={styles.content}>Monday - Saturday: 08:00 - 22:00</p>
            <p className={styles.content}>Sunday : Closed</p>
          </div>
        </div>

        <p className={styles.email} data-aos="fade-up">
          You can email us
        </p>

        {/* Form */}
        <form className="row" onSubmit={sendEmail}>
          <div className="col-md-6" data-aos="fade-right" style={{ textAlign: "left" }}>
            <label className={styles.label}>Name</label><br />
            <input name="name" value={formContent.name || ""} onChange={handleChange} className={styles.input} type="text" required />

            <label className={styles.label}>Email</label><br />
            <input name="email" value={formContent.email || ""} onChange={handleChange} className={styles.input} type="email" required />

            <label className={styles.label}>Subject</label><br />
            <input name="subject" value={formContent.subject || ""} onChange={handleChange} className={styles.input} type="text" required />
          </div>

          <div className="col-md-6" data-aos="fade-left" style={{ textAlign: "left" }}>
            <label className={styles.label}>Message</label><br />
            <textarea name="message" value={formContent.message || ""} onChange={handleChange} className={`${styles.input} ${styles.msg}`} required />
            <div style={{ textAlign: "right" }}>
              <button type="submit" className={`btn custom_btn ${styles.btn}`}>SEND</button>
            </div>
          </div>
        </form>

        {status && <p style={{ marginTop: "15px", color: "green" }}>{status}</p>}
      </div>
    </>
  );
};

export default ContactUsForm;
