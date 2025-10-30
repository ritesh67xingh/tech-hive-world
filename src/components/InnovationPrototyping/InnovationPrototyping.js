import React, { useEffect } from "react";
import styles from "./InnovationPrototyping.module.css";
import img1 from "../../assets/InnovationPrototyping/main.png";
import img2 from "../../assets/InnovationPrototyping/middle1.png";
import img3 from "../../assets/InnovationPrototyping/bottom1.png";

const InnovationPrototyping = () => {

  useEffect(() => {
    const fadeTargets = document.querySelectorAll(`.${styles.fadeTarget}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          } else {
            entry.target.classList.remove(styles.show);
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeTargets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div>

        {/* Top Section */}
        <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
          <div className={`col-md-6 px-0 ${styles.fadeTarget} ${styles.fadeLeft}`}>
            <div className={styles.topContain}>
              <p className={styles.headTop}>
                Innovation & <span style={{ color: "#1877f2" }}>Prototyping</span>
              </p>
              <p className={styles.identityTop}>From Concept to Cloud, Fast</p>
              <p className={styles.content}>
                We build functional prototypes to validate your vision and de-risk your investment.
                Our rapid prototyping helps you move from idea to proof of concept efficiently and confidently.
              </p>
            </div>
          </div>
          <div className={`col-md-6 px-0 ${styles.fadeTarget} ${styles.fadeRight}`}>
            <img src={img1} alt="Innovation Prototyping" className={styles.img1} />
          </div>
        </div>

        {/* Middle Section */}
        <div className="container">
          <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
            <div className={`col-md-6 ${styles.middleContain} ${styles.fadeTarget} ${styles.fadeLeft}`}>
              <p className={styles.heading}>Our Approach to Rapid Validation</p>
              <p className={styles.text}>
                We help you overcome technical uncertainty by creating rapid, functional prototypes.
                Our process focuses on defining your core technical goals, developing quickly with
                modern cloud tools, and testing in real-world conditions to provide actionable insights.
              </p>
            </div>
            <div className={`col-md-6 ${styles.fadeTarget} ${styles.fadeRight}`}>
              <img src={img2} alt="Prototype Development" className={styles.img2} />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="container">
          <div className={`row ${styles.contain}`}>
            <div className={`col-md-6 ${styles.fadeTarget} ${styles.fadeLeft}`}>
              <img src={img3} alt="Testing & Validation" className={styles.img2} />
            </div>
            <div className={`col-md-6 ${styles.bottomContain} ${styles.fadeTarget} ${styles.fadeRight}`}>
              <p className={styles.heading1}>Key Outcomes & Benefits</p>
              <p className={styles.text1}>
                Receive a deployable prototype on AWS with complete source code and validation insights.
                Our iterative approach ensures that your concept is tested for performance, scalability,
                and security — enabling faster decision-making and confident investment in full-scale development.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default InnovationPrototyping;
