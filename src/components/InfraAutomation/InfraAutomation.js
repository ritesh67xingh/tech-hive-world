import React, { useEffect } from "react";
import styles from "./InfraAutomation.module.css";
import img1 from "../../assets/InfraAutomation/main.png";
import img2 from "../../assets/InfraAutomation/middle1.png";
import img3 from "../../assets/InfraAutomation/bottom1.png";

const InfraAutomation = () => {
  // Fade animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.2 }
    );

    const fadeTargets = document.querySelectorAll(`.${styles.fadeTarget}`);
    fadeTargets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* ========== TOP SECTION ========== */}
      <section className="row mt-5 mx-0 flex-column-reverse flex-md-row">
        <div className={`col-md-6 px-0 ${styles.fadeTarget} ${styles.fadeLeft}`}>
          <div className={styles.topContain}>
            <p className={styles.headTop}>
              Infrastructure as Code &{" "}
              <span style={{ color: "#1877f2" }}>Automation</span>
            </p>
            <p className={styles.identityTop}>
              Eliminate Manual Operations — Build Consistent & Reliable Cloud
            </p>
            <p className={styles.content}>
              We help you eliminate manual provisioning, reduce errors, and accelerate
              deployments by automating your cloud infrastructure using Terraform,
              CloudFormation, and Python-based automation — ensuring speed, reliability,
              and full auditability.
            </p>
          </div>
        </div>

        <div className={`col-md-6 px-0 ${styles.fadeTarget} ${styles.fadeRight}`}>
          <img
            src={img1}
            alt="Infrastructure Automation"
            className={styles.img1}
          />
        </div>
      </section>

      {/* ========== MIDDLE SECTION ========== */}
      <section className="container">
        <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
          <div
            className={`col-md-6 ${styles.middleContain} ${styles.fadeTarget} ${styles.fadeLeft}`}
          >
            <p className={styles.heading}>
              Is Manual Cloud Management Slowing You Down?
            </p>
            <p className={styles.text}>
              Manual provisioning causes delays, inconsistent environments, human
              errors, and poor scalability. Without IaC and automation, teams face
              slow releases, configuration drift, risky manual changes, and no version
              control over infrastructure.
            </p>
          </div>

          <div className={`col-md-6 ${styles.fadeTarget} ${styles.fadeRight}`}>
            <img src={img2} alt="Declarative Infra" className={styles.img2} />
          </div>
        </div>
      </section>

      {/* ========== BOTTOM SECTION ========== */}
      <section className="container">
        <div className={`row ${styles.contain}`}>
          <div className={`col-md-6 ${styles.fadeTarget} ${styles.fadeLeft}`}>
            <img src={img3} alt="Automated Pipelines" className={styles.img2} />
          </div>

          <div
            className={`col-md-6 ${styles.bottomContain} ${styles.fadeTarget} ${styles.fadeRight}`}
          >
            <p className={styles.heading1}>Our Approach — End-to-End IaC Automation</p>
            <p className={styles.text1}>
              We treat infrastructure as software by implementing IaC with Terraform,
              CDK or CloudFormation, integrating it into CI/CD pipelines, adding Python
              automation for complex workflows, and storing everything in Git for peer
              reviews, rollbacks, and compliance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfraAutomation;
