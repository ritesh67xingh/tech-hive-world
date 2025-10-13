import React from "react";
import styles from './Real.module.css';
import improveImg from '../../assets/home/improves.png';

const Real = () =>{
    return(
        <div className="mb-5 overflow-hidden">
            <div className="row g-0">
                <div className={`col-md-6 ${styles.imgDiv}`}>
                    <img data-aos='slide-right' data-aos-offset="150" src={improveImg} alt="" className={styles.img}/>
                </div>
                <div className="col-md-6">
                    <div className={styles.text}>
                        <p data-aos='slide-right' data-aos-offset="150"  className={styles.heading}>Real</p>
                        <p data-aos='slide-left' data-aos-offset="150" className={styles.subHeading}>Transforms Cloud Infrastructure & DevOps</p>
                        <p data-aos='zoom-in' data-aos-offset="150" className={styles.content}>Scalable cloud architectures, secure multi-account AWS setups, CI/CD automation, Kubernetes orchestration, and cost optimization. We help startups and enterprises accelerate deployments, improve reliability, and reduce cloud spend while ensuring compliance and operational excellence. </p>
                        <div data-aos='zoom-in' style={{textAlign:'left'}}>
                            <button className={`btn custom_btn ${styles.btn}`}>LET&apos;S TALK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Real;