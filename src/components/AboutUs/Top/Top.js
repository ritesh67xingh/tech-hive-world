import React from "react";
import styles from './Top.module.css';
import img1 from '../../../assets/aboutUs/img1.png';
import img2 from '../../../assets/aboutUs/img2.png';

const Top = () => {
    return (
        <div className={`container overflow-hidden`}>

            <p data-aos='slide-right' className={styles.heading}>About Us</p>

            <p data-aos='slide-left' className={styles.subHeading}>
                Building Secure, Scalable & Automated Cloud Infrastructure
            </p>

            <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
                
                <div data-aos='slide-right' className={`col-md-6`}>
                    <p className={styles.about}>Our Mission & Vision</p>

                    <p className={styles.creativity}>Empowering Businesses Through Cloud Innovation</p>

                    <p className={styles.contn}>1. We help organizations adopt cloud the right way—securely and efficiently.</p>
                    <p className={styles.contn}>2. Our solutions are built to scale with your business and future workloads.</p>
                    <p className={styles.contn}>3. DevOps automation and CI/CD pipelines accelerate development cycles.</p>
                    <p className={styles.contn}>4. Kubernetes orchestration ensures reliable, containerized application scaling.</p>
                    <p className={styles.contn}>5. We implement strong cloud security aligned with industry compliance standards.</p>
                    <p className={styles.contn}>6. Cloud cost optimization helps reduce waste and improve financial efficiency.</p>
                    <p className={styles.contn}>7. Our team removes infrastructure complexity so your teams innovate faster.</p>
                    <p className={styles.contn}>8. We design future-ready cloud platforms tailored for global scalability.</p>
                    <p className={styles.contn}>9. Seamless collaboration across teams made possible with smart cloud setups.</p>
                    <p className={styles.contn}>10. We believe in long-term partnerships and continuous improvement.</p>
                    <p className={styles.contn}>11. Our goal: deliver secure, automated, and high-performance cloud ecosystems.</p>
                </div>

                <div data-aos='slide-left' data-aos-offset='50' className={`col-md-6 ${styles.imgContain}`}>
                    <img src={img1} alt="" className={styles.img1} />
                </div>
            </div>

            <div data-aos='fade-up' className='row' style={{ textAlign: 'left' }}>
                <div className={`col-md-6`}>
                    <img src={img2} alt="" className={styles.img2} />
                </div>
            </div>
        </div>
    )
}

export default Top;
