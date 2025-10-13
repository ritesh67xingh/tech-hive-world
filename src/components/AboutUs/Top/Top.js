import React from "react";
import styles from './Top.module.css';
import img1 from '../../../assets/aboutUs/img1.png';
import img2 from '../../../assets/aboutUs/img2.png';

const Top =()=>{
    return(
        <div className={`container overflow-hidden`}>
            <p data-aos='slide-right' className={styles.heading}>About Us</p>
            <p data-aos='slide-left' className={styles.subHeading}>Your Trusted Cloud & DevOps Partner</p>
            <p data-aos='fade-up' data-aos-offset='80' className={styles.content}>We are a cloud-first DevOps team helping startups and enterprises design, deploy, and manage secure, scalable, and cost-efficient cloud platforms. From AWS architecture and Kubernetes orchestration to automated CI/CD pipelines and cloud security, we deliver production-ready solutions that just work.</p>
        
            <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
                <div data-aos='slide-right' className={`col-md-6`}>
                    <p className={styles.about}>Our Mission & Vision</p>
                    <p className={styles.creativity}>Empowering Growth with Cloud</p>
                    <p className={styles.contn}>1.  We transform cloud challenges into opportunities for business growth.</p>
                    <p className={styles.contn}>2.  Our focus is on delivering secure, scalable, and cost-efficient cloud solutions.</p>
                    <p className={styles.contn}>3.  Our expertise spans cloud architecture, DevOps automation, and CI/CD pipelines.</p>
                    <p className={styles.contn}>4.  We design Kubernetes orchestration and containerized environments for scaling.</p>
                    <p className={styles.contn}>5.  We ensure compliance with industry standards like PCI DSS, GDPR, and HIPAA.</p>
                    <p className={styles.contn}>6.  Cloud cost optimization is integral to our approach, helping clients save 20–30%</p>
                    <p className={styles.contn}>7.  By managing technical complexities, we free teams to focus on innovation.</p>
                    <p className={styles.contn}>8.  We build future-ready cloud platforms that scale with business growth.</p>
                    <p className={styles.contn}>9.  Our solutions enable global teams to collaborate seamlessly and securely.</p>
                    <p className={styles.contn}>10. We are committed to long-term partnerships & continuous improvement.</p>
                    <p className={styles.contn}>11. Ultimately, we help businesses maximize efficiency, reduce risk, and achieve operational excellence.</p>

                </div>
                <div data-aos='slide-left' data-aos-offset='50' className={`col-md-6 ${styles.imgContain}`}>
                    <img src={img1} alt="" className={styles.img1}/>
                </div>
            </div>
            <div data-aos='fade-up' className='row' style={{textAlign:'left'}}>
                <div className={`col-md-6`}> 
                    <img src={img2} alt="" className={styles.img2}/>
                </div>
            </div>
        </div>
    )
}

export default Top;