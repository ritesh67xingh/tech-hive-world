import React, { useEffect } from "react";
import styles from "./KubernetesServerless.module.css";
import img1 from "../../assets/KubernetesServerless/main.png";
import img2 from "../../assets/KubernetesServerless/middle1.png";
import img3 from "../../assets/KubernetesServerless/bottom1.png";

const KubernetesServerless = () => {
  // ✅ Animation setup (Option 1)
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

    const elements = document.querySelectorAll(`.${styles.fadeTarget}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* ========== TOP SECTION ========== */}
      <section className="row mt-5 mx-0 flex-column-reverse flex-md-row">
        <div className={`col-md-6 px-0 ${styles.fadeTarget} ${styles.fadeLeft}`}>
          <div className={styles.topContain}>
            <p className={styles.headTop}>
              Kubernetes &{" "}
              <span style={{ color: "#1877f2" }}>Serverless Solutions</span>
            </p>
            <p className={styles.identityTop}>
              We build powerful, cost-efficient applications by combining the
              robust orchestration of Kubernetes with the on-demand scalability
              of serverless.
            </p>
            <p className={styles.content}>
              Choosing the right architecture is complex. Many organizations
              struggle to balance between containers and serverless — managing
              Kubernetes complexity, avoiding serverless pitfalls like cold
              starts, and controlling costs effectively.
            </p>
          </div>
        </div>

        <div className={`col-md-6 px-0 ${styles.fadeTarget} ${styles.fadeRight}`}>
          <img
            src={img1}
            alt="Kubernetes and Serverless"
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
              The Best of Both Worlds, Architected for You
            </p>
            <p className={styles.text}>
              We design hybrid architectures that blend Kubernetes and serverless
              to achieve optimal performance and scalability.
              <br />
              <br />
              <strong>Scalable Container Orchestration:</strong> Deploy and manage
              demanding, stateful apps on Kubernetes (EKS) using Docker — resilient,
              auto-scaling, and production-ready.
              <br />
              <br />
              <strong>Efficient Serverless Functions:</strong> Build event-driven
              backends and APIs with AWS Lambda & API Gateway for instant scalability
              and minimal idle cost.
              <br />
              <br />
              <strong>Secure by Design:</strong> From IAM best practices to
              VPC-secured Lambda functions interacting safely with RDS — security
              is built in, not bolted on.
            </p>
          </div>

          <div className={`col-md-6 ${styles.fadeTarget} ${styles.fadeRight}`}>
            <img
              src={img2}
              alt="Cloud Native Architecture"
              className={styles.img2}
            />
          </div>
        </div>
      </section>

      {/* ========== BOTTOM SECTION ========== */}
      <section className="container">
        <div className={`row ${styles.contain}`}>
          <div className={`col-md-6 ${styles.fadeTarget} ${styles.fadeLeft}`}>
            <img
              src={img3}
              alt="DevOps & GitOps Automation"
              className={styles.img2}
            />
          </div>

          <div
            className={`col-md-6 ${styles.bottomContain} ${styles.fadeTarget} ${styles.fadeRight}`}
          >
            <p className={styles.heading1}>
              What You Get — Production-Ready Cloud Architecture
            </p>
            <p className={styles.text1}>
              ✓ A scalable, production-grade Kubernetes (EKS) cluster <br />
              ✓ Secure, efficient serverless APIs and functions <br />
              ✓ Optimally blended hybrid architecture <br />
              ✓ Automated CI/CD pipelines for both containers and functions <br />
              <br />
              <strong>
                Ready to Build a Truly Modern and Cost-Efficient Application?
              </strong>
              <br />
              Let’s architect the perfect blend of Kubernetes and serverless to
              meet your business goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KubernetesServerless;
