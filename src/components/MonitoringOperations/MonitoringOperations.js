import React, { useEffect } from "react";
import styles from "./MonitoringOperations.module.css";
import img1 from "../../assets/MonitoringOperations/main.png";
import img2 from "../../assets/MonitoringOperations/middle1.png";
import img3 from "../../assets/MonitoringOperations/bottom1.png";

const MonitoringOperations = () => {
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
        {/* Top */}
        <div className="row mt-5 mx-0 flex-column-reverse flex-md-row">
          <div className={`col-md-6 px-0 ${styles.fadeTarget} ${styles.fadeLeft}`}>
            <div className={styles.topContain}>
              <p className={styles.headTop}>
                Cloud Monitoring &{" "}
                <span style={{ color: "#1877f2" }}>Operations</span>
              </p>
              <p className={styles.identityTop}>
                Full Visibility. Reliable Performance. Confident Operations.
              </p>
              <p className={styles.content}>
                Gain real-time visibility, ensure reliability, and keep your cloud
                running at peak performance with unified observability, proactive
                alerts, and automated incident response across your AWS environment.
              </p>
            </div>
          </div>
          <div className={`col-md-6 px-0 ${styles.fadeTarget} ${styles.fadeRight}`}>
            <img
              src={img1}
              alt="Monitoring Operations"
              className={styles.img1}
            />
          </div>
        </div>

        {/* Middle */}
        <div className="container">
          <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>
            <div
              className={`col-md-6 ${styles.middleContain} ${styles.fadeTarget} ${styles.fadeLeft}`}
            >
              <p className={styles.heading}>
                Is Your Cloud Running Blind Without Visibility?
              </p>
              <p className={styles.text}>
                Without proper monitoring, teams face silent failures, slow
                troubleshooting, unexpected billing spikes, and poor performance
                decisions — because issues go undetected until users are already
                impacted.
              </p>
            </div>
            <div
              className={`col-md-6 ${styles.fadeTarget} ${styles.fadeRight}`}
            >
              <img
                src={img2}
                alt="Proactive Monitoring"
                className={styles.img2}
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="container">
          <div className={`row ${styles.contain}`}>
            <div
              className={`col-md-6 ${styles.fadeTarget} ${styles.fadeLeft}`}
            >
              <img
                src={img3}
                alt="Incident Response"
                className={styles.img2}
              />
            </div>
            <div
              className={`col-md-6 ${styles.bottomContain} ${styles.fadeTarget} ${styles.fadeRight}`}
            >
              <p className={styles.heading1}>
                Our Approach — Proactive, Unified Observability
              </p>
              <p className={styles.text1}>
                We build an end-to-end monitoring layer using CloudWatch, Grafana,
                Prometheus, and centralized logging, with intelligent alerting and
                automated runbooks — giving you full visibility, fast remediation,
                and cost-efficient cloud operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonitoringOperations;
