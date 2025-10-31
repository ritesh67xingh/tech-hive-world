import React from "react";
import styles from "./Footer.module.css";
import fb from "../../assets/home/facebook.png";
import linkdin from "../../assets/home/linkdin.png";
import insta from "../../assets/home/insta.png";
import logo from "../../assets/logo.svg"; // ✅ import your logo image

const Footer = () => {
  return (
    <>
      <div className={styles.footerSection}>
        <div className="container">
          <div className="row">
            {/* ==== Column 1 ==== */}
            <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
              <div className={styles.logoWrapper}>
                <img
                  src={logo}
                  alt="Tech Hive World"
                  className={styles.logoImg}
                  style={{ width: "300px", height: "90px" }}
                />
              </div>
              <p className={styles.text}>
                We are a cloud-first DevOps team helping startups and
                enterprises build secure, scalable, and cost-efficient cloud
                platforms.
              </p>
              <p className={styles.text}>
                From AWS architecture to automation and security, we deliver
                solutions that just work.
              </p>
              <div className={styles.social_logo}>
                <img src={fb} alt="Facebook" className={styles.img} />
                <img src={linkdin} alt="LinkedIn" className={styles.img} />
                <img src={insta} alt="Instagram" className={styles.img} />
              </div>
            </div>

            {/* ==== Column 2 ==== */}
            <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
              <p className={styles.head}>Services</p>
              <p className={styles.text}>
                Cloud Infrastructure Design & Deployment
              </p>
              <p className={styles.text}>Cloud Security & Compliance</p>
              <p className={styles.text}>Infrastructure as Code & Automation</p>
              <p className={styles.text}>Monitoring & Operations</p>
              <p className={styles.text}>Kubernetes & Serverless Solutions</p>
              <p className={styles.text}>Innovation & Prototyping</p>
            </div>

            {/* ==== Column 3 ==== */}
            <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
              <p className={styles.head}>Head Office</p>
              <p className={styles.text}>
                SGR Prestige, Patel Layout, Marathahalli, Bangalore-560037
              </p>
              <p className={styles.text}>info@techhiveworld.com</p>
              <p className={styles.text}>(+91) 99025 77178</p>
              <p className={styles.text}>(+91) 84098 01459</p>
            </div>

            {/* ==== Column 4 ==== */}
            <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
              <p className={styles.head}>Opening Hour</p>
              <p className={styles.text}>Mon - Sat : 8:00 - 22:00</p>
              <p className={styles.text}>Sun : Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* ==== Bottom Copyright ==== */}
      <div className={styles.footerBottom}>
        <p className={styles.bottom}>
          Copyright © 2025 Tech Hive World. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
