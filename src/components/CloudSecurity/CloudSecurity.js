import React, { useEffect } from "react";
import styles from "./CloudSecurity.module.css";
import img1 from "../../assets/CloudSecurity/main.png";
import img2 from "../../assets/CloudSecurity/middle1.png";
import img3 from "../../assets/CloudSecurity/bottom1.png";

const CloudSecurity = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add(styles.show);
        }
      })
    },{threshold:0.2})

    document.querySelectorAll(`.${styles.fadeTarget}`).forEach(el=>{
      observer.observe(el);
    })
  },[])

  return (
    <div className={styles.wrapper}>

      {/* ========== TOP SECTION ========== */}
      <section className="row mt-5 mx-0 flex-column-reverse flex-md-row">

        <div className={`col-md-6 px-0 ${styles.fadeTarget} ${styles.fadeLeft}`}>
          <div className={styles.topContain}>
            <p className={styles.headTop}>
              Cloud <span style={{ color: "#1877f2" }}>Security & Compliance</span>
            </p>
            <p className={styles.identityTop}>
              Proactive, defense-in-depth cloud security strategies
            </p>
            <p className={styles.content}>
              We implement proactive cloud security strategies that protect your environment,
              reduce risks, and ensure you meet compliance requirements without slowing innovation —
              including IAM, encryption, governance, monitoring, and automated security enforcement.
            </p>
          </div>
        </div>

        <div className={`col-md-6 px-0 ${styles.fadeTarget} ${styles.fadeRight}`}>
          <img src={img1} alt="Cloud Security" className={styles.img1} />
        </div>
      </section>


      {/* ========== MIDDLE SECTION ========== */}
      <section className="container">
        <div className={`row ${styles.contain} flex-column-reverse flex-md-row`}>

          <div className={`col-md-6 ${styles.middleContain} ${styles.fadeTarget} ${styles.fadeLeft}`}>
            <p className={styles.heading}>Facing These Security Risks?</p>
            <p className={styles.text}>
              • Misconfigurations and vulnerabilities that go undetected<br/>
              • Compliance failures across SOC2, GDPR, ISO standards<br/>
              • Insider threats due to over-permissive IAM policies<br/>
              • Reactive security discovered only after deployment<br/>
              • Lack of real-time visibility across AWS environments
            </p>
          </div>

          <div className={`col-md-6 ${styles.fadeTarget} ${styles.fadeRight}`}>
            <img src={img2} alt="Compliance" className={styles.img2} />
          </div>

        </div>
      </section>


      {/* ========== BOTTOM SECTION ========== */}
      <section className="container">
        <div className={`row ${styles.contain}`}>

          <div className={`col-md-6 ${styles.fadeTarget} ${styles.fadeLeft}`}>
            <img src={img3} alt="Cloud Operations" className={styles.img2} />
          </div>

          <div className={`col-md-6 ${styles.bottomContain} ${styles.fadeTarget} ${styles.fadeRight}`}>
            <p className={styles.heading1}>Our Approach & Key Deliverables</p>
            <p className={styles.text1}>
              • Preventive "shift-left" security integrated in DevOps (CheckOv)<br/>
              • Continuous threat detection using Wiz & AWS Security Hub<br/>
              • Hardened IAM with least-privilege access control<br/>
              • Compliance-ready configuration and governance<br/>
              • Security posture assessment with actionable remediation plan
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CloudSecurity;
