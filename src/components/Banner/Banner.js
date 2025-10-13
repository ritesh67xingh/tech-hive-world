import React from "react";
import styles from './Banner.module.css';

const Banner = () => {

  return (
    <>
        <div className={styles.imgbox}>
            <div className={`${styles.center} overflow-hidden`}>
                <p data-aos='fade-down' className={styles.text}>Cloud Solutions That Scale With Your Business.</p>
                <button data-aos='fade-up' className={`btn custom_btn ${styles.btn}`}>Book a Free Cloud Consultation</button>
            </div>
            
        </div>
        
    </>
  );
};

export default Banner;
