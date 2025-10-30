import React, { useEffect } from "react";
import styles from "./CloudInfrastructure.module.css";
import img1 from "../../assets/CloudInfrastructure/main.png";
import img2 from "../../assets/CloudInfrastructure/middle1.png";
import img3 from "../../assets/CloudInfrastructure/bottom1.png";

const CloudInfrastructure = () => {
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

    document.querySelectorAll(`.${styles.fadeTarget}`).forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div>
        {/* Top Section */}
        <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
          <div
            className={`col-md-6 px-0 ${styles.fadeTarget} ${styles.fadeLeft}`}
          >
            <div className={styles.topContain}>
              <p className={styles.headTop}>
                Cloud Infrastructure{" "}
                <span style={{ color: "#1877f2" }}>Design & Deployment</span>
              </p>
              <p className={styles.identityTop}>
                Secure • Scalable • Cost-Optimized AWS Environment
              </p>

              <p className={styles.content}>
                We design and implement secure, scalable, and cost-efficient AWS
                foundations aligned with the AWS Well-Architected Framework —
                engineered for long-term growth, stability, and automation
                readiness.
              </p>

              <p className={styles.content}>
                <strong>Common cloud challenges we help eliminate:</strong>
                <br />• Escalating and unpredictable AWS costs
                <br />• Uncertainty around scalability for traffic and growth
                <br />• Complex multi-account governance and networking
                <br />• Manual provisioning delaying delivery timelines
                <br />• Gaps in security, compliance, and cloud governance
              </p>
            </div>
          </div>

          <div
            className={`col-md-6 px-0 ${styles.fadeTarget} ${styles.fadeRight}`}
          >
            <img
              src={img1}
              alt="Cloud Infrastructure"
              className={styles.img1}
            />
          </div>
        </div>

        {/* Middle Section */}
        <div className="container">
          <div
            className={`row ${styles.contain} flex-column-reverse flex-md-row`}
          >
            <div
              className={`col-md-6 ${styles.middleContain} ${styles.fadeTarget} ${styles.fadeLeft}`}
            >
              <p className={styles.heading}>
                Our Approach —{" "}
                <span style={{ color: "#1877f2" }}>
                  Build for Long-Term Reliability
                </span>
              </p>
              <p className={styles.text}>
                Our approach focuses on creating AWS environments that are not
                just functional but future-ready. We begin with a comprehensive
                Well-Architected assessment and design a tailored AWS blueprint
                that matches your organizational goals. Infrastructure
                automation is implemented through tools such as Terraform,
                CloudFormation, or CDK, ensuring consistency and speed.
              </p>
              <p className={styles.text}>
                With a secure multi-account setup via AWS Control Tower and
                production-grade networking through AWS Transit Gateway, your
                cloud foundation remains compliant, scalable, and easy to
                manage. Every deployment is version-controlled, repeatable, and
                aligned with best practices for security and performance.
              </p>
            </div>

            <div
              className={`col-md-6 ${styles.fadeTarget} ${styles.fadeRight}`}
            >
              <img
                src={img2}
                alt="Infrastructure Approach"
                className={styles.img2}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="container">
          <div className={`row ${styles.contain}`}>
            <div
              className={`col-md-6 ${styles.fadeTarget} ${styles.fadeLeft}`}
            >
              <img src={img3} alt="Implementation Outcomes" className={styles.img2} />
            </div>

            <div
              className={`col-md-6 ${styles.bottomContain} ${styles.fadeTarget} ${styles.fadeRight}`}
            >
              <p className={styles.heading}>
                Key Outcomes —{" "}
                <span style={{ color: "#1877f2" }}>From Vision to Execution</span>
              </p>
              <p className={styles.text}>
                The final delivery includes detailed AWS architecture
                documentation, network design diagrams, and automation code
                built using Terraform or CDK. You’ll receive a production-ready,
                secure, and scalable environment configured via AWS Control
                Tower and Transit Gateway.
              </p>
              <p className={styles.text}>
                Our team ensures a smooth transition through structured
                knowledge transfer, giving your teams full visibility and
                control over every deployed component. The result — a
                cloud-first foundation optimized for performance, governance,
                and cost-efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudInfrastructure;
