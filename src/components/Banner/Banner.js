import React from "react";
import styles from './Banner.module.css';

const Banner = ({ openForm }) => {
  return (
    <div className={styles.imgbox}>
      <div className={styles.center}>

        <p data-aos='fade-down' className={styles.text}>
          <span className={styles.line1}>Secure, Scalable, and</span>
          <span className={styles.line2}>Cost-Optimized</span>
          <span className={styles.line3}>Cloud Solutions</span>
        </p>

        <p data-aos='fade-up' className={styles.subtext}>
          Helping startups and enterprises design, automate, and protect their AWS infrastructure.
        </p>

        <button 
          data-aos='fade-up' 
          className={styles.btn}
          onClick={openForm}   // <<< Now using parent function
        >
          Get Free Cloud Audit
        </button>

      </div>
    </div>
  );
};

export default Banner;
