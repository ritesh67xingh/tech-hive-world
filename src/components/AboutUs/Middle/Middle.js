import React from "react";
import styles from './Middle.module.css';
import logo1 from '../../../assets/aboutUs/middle1.png';
import logo2 from '../../../assets/aboutUs/middle2.png';
import logo3 from '../../../assets/aboutUs/middle3.png';

const Middle = () => {
    return (
        <div style={{ backgroundColor: '#f8f8f8' }} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>

                {/* Updated Heading */}
                <p data-aos='fade-down-right' data-aos-offset="170" className={styles.mainHead}>
                    Empowering Businesses with Cloud & DevOps Excellence
                </p>

                {/* Updated Paragraph */}
                <p data-aos='fade-up-left' data-aos-offset="170" className={styles.mainContent}>
                    At Tech Hive World, we help organizations modernize, secure, and automate their cloud 
                    environments. Whether it's AWS architecture, DevOps automation, or cloud security, 
                    we deliver scalable solutions that accelerate growth, improve reliability, 
                    and reduce operational overhead.
                </p>

                <div className="row">

                    {/* Box 1 */}
                    <div data-aos='fade-right' data-aos-offset="170" className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo1} alt="" />
                            <p className={styles.head}>Cloud Architecture</p>
                            <p className={styles.content}>
                                Scalable, secure AWS architectures built with best practices for long-term performance.
                            </p>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div data-aos='fade-up' className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo2} alt="" />
                            <p className={styles.head}>DevOps Automation</p>
                            <p className={styles.content}>
                                CI/CD pipelines, Infrastructure-as-Code, and automated workflows to streamline delivery.
                            </p>
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div data-aos='fade-left' className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo3} alt="" />
                            <p className={styles.head}>Cloud Security</p>
                            <p className={styles.content}>
                                Proactive and detective controls to strengthen cloud security and compliance.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Middle;
