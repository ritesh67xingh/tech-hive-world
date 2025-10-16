import React from "react";
import styles from './ChoosingUs.module.css';
import experience from '../../assets/home/experience.png';
import communication from '../../assets/home/communication.png';
import comfort from '../../assets/home/comfort.png';

const ChoosingUs = () =>{
    return(
        <div style={{backgroundColor: '#d8e7fd'}}>
            <div className="container overflow-hidden">
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>Top three the reason why you should choosing us.</p>
                <p data-aos='slide-left' className={styles.sub_text}>The right mix of security, speed, and scalability.</p>
                <div className={`row ${styles.sub}`}>
                    <div data-aos='fade-right' className="col-md-4">
                        <img src={experience} alt="experience"/>
                        <p className={styles.logo_head}>Secure & Scalable Cloud Architecture</p>
                        <p className={styles.logo_text}>We design cloud platforms that are built to grow with your business. From multi-account AWS setups to Kubernetes clusters, our solutions ensure performance, security, and reliability at every stage.</p>
                    </div>

                    <div data-aos='fade' className="col-md-4">
                        <img src={communication} alt="experience"/>
                        <p className={styles.logo_head}>Cost Optimization & Faster Delivery</p>
                        <p className={styles.logo_text}>We help you save 20–30% on cloud costs while accelerating deployments with automation and CI/CD. That means more speed, less waste, and quicker time-to-market — giving your team more time to focus on innovation, not infrastructure.</p>
                    </div>

                    <div data-aos='fade-left' className="col-md-4">
                        <img src={comfort} alt="experience"/>
                        <p className={styles.logo_head}>Compliance & Long-Term Partnership</p>
                        <p className={styles.logo_text}>From GDPR to HIPAA, we ensure your infrastructure is audit-ready and industry compliant. More than just consultants, we act as your long-term cloud partner focused on stability, innovation, and growth.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoosingUs;