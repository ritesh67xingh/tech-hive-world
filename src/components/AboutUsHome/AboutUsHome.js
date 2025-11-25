import React from "react";
import styles from './AboutUsHome.module.css';
import img1 from '../../assets/home/about1.png';
import img2 from '../../assets/home/about2.png';
import img3 from '../../assets/home/about3.png';

const AboutUsHome = ({ openForm }) => {
    return(
        <>
            <div className={`container ${styles.contain}`}>
                <div className="row overflow-hidden">
                    <div className="col-md-6">
                        <p data-aos="slide-right" className={styles.head}>ABOUT US</p>
                        <p data-aos="slide-left" className={styles.heading}>
                            Experts in Cloud Infrastructure, DevOps<br />and Automation
                        </p>
                        <div data-aos="zoom-in">
                            <p className={styles.content}>
                                We are a cloud-first DevOps team helping startups and enterprises build secure, scalable, and cost-efficient cloud platforms. From multi-account AWS landing zones and Kubernetes orchestration to automated CI/CD pipelines and enterprise-grade cloud security, we deliver production-ready infrastructure that just works. Our solutions accelerate time-to-market, cut unnecessary cloud spend, and ensure compliance across industries. With us, you gain a long-term partner focused on reliability, automation, and growth.
                            </p>
                        </div>

                        <div data-aos='zoom-in' style={{ textAlign: 'left' }}>
                            <button 
                                className={`btn custom_btn ${styles.btn}`} 
                                onClick={openForm}   // <<< HERE
                            >
                                Talk to Our Experts
                            </button>
                        </div>
                    </div>

                    <div className="col-md-6 mt-5 overflow-hidden">
                        <div className={styles.row}>
                            <div className={`${styles.column} ${styles.col1}`}>
                                <img data-aos="zoom-in-right" src={img1} alt="" />
                            </div>
                            <div className={styles.column}>
                                <img data-aos="zoom-in-left" src={img2} style={{ width:'110%' }} alt="" />
                                <img data-aos="zoom-in-left" src={img3} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AboutUsHome;
