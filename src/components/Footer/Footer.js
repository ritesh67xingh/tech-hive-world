import React from "react";
import styles from './Footer.module.css';
import fb from '../../assets/home/facebook.png';
import linkdin from '../../assets/home/linkdin.png';
import insta from '../../assets/home/insta.png';

const Footer = () =>{
    return (
        <>
            <div style={{backgroundColor:'#2b2b2b', paddingTop:'89px', paddingBottom:'90px'}}>
                <div className="container" >
                    <div className="row">
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.logo}>Tech Hive</p>
                            <p className={styles.text}>We are a cloud-first DevOps team helping startups and enterprises build secure, scalable, and cost-efficient cloud platforms.</p>
                            <p className={styles.text}>From AWS architecture to automation and security, we deliver solutions that just work.</p>
                            <div className={styles.social_logo}>
                                <img src={fb} alt="fb" className={styles.img}/>
                                <img src={linkdin} alt="in" className={styles.img}/>
                                <img src={insta} alt="insta" className={styles.img}/>
                            </div>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Services</p>
                            <p className={styles.text}>Cloud Architecture & Migration</p>
                            <p className={styles.text}>DevOps & CI/CD Automation</p>
                            <p className={styles.text}>Kubernetes & Containerization</p>
                            <p className={styles.text}>Cloud Security & Compliance</p>
                            <p className={styles.text}>Cost Optimization & Monitoring</p>

                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Head Office</p>
                            <p className={styles.text}> SGR Prestige, Patel Layout, Marathahalli, Bangalore-560037</p>
                            <p className={styles.text}>info@techhiveworld.com</p>
                            <p className={styles.text}>(+91) 99025 77178</p>
                            <p className={styles.text}>(+91) 84098 01459</p>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Opening Hour</p>
                            <p className={styles.text}>Mon - Sat : 8:00 - 22:00</p>
                            <p className={styles.text}>Sun : Closed</p>

                        </div>
                    </div>

                </div>
            </div>


            <div style={{backgroundColor: '#2b2b2b', borderTop: 'solid 1px #707070'}}>
                    <p className={styles.bottom}>Copyright © 2025 Tech Hive World. All Rights Reserved.</p>
            </div>
        </>
    )
}
export default Footer;