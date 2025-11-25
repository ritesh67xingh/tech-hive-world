import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import styles from "./NavbarMain.module.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const NavbarMain = () => {
  const [show, setShow] = useState(false);
  const [activeNav, setActiveNav] = useState([true, false, false, false]);
  const [expand, setExpand] = useState(false);

  const closeNav = () => {
    setExpand(false);
  };

  const showDropdown = () => {
    setShow(true);
  };

  const hideDropdown = () => {
    setShow(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("NavbarMain") != null) {
      let temp = JSON.parse(sessionStorage.getItem("NavbarMain"));
      setActiveNav([...temp]);
    }
  }, []);

  const handleActiveNav = (i) => {
    let temp = activeNav.map(() => false);
    temp[i] = true;
    setActiveNav([...temp]);
    sessionStorage.setItem("NavbarMain", JSON.stringify(temp));
  };

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white",
          boxShadow: "1px 1px 10px rgb(0 0 0 / 0.4)",
        }}
        variant="light"
        expand="lg"
        sticky="top"
        onToggle={() => {
          setExpand((prevState) => !prevState);
        }}
        expanded={expand}
      >
        <Container>

          
          <Link 
            to="/" 
            className={styles.logo} 
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            onClick={() => { handleActiveNav(0); closeNav(); }}
          >
            <img 
              src={logo} 
              alt="Tech Hive World Logo" 
              style={{ height: "55px", width: "160px" }} 
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "auto" }}>

              <NavLink
                to="/"
                className={`${styles.nav_text} nav-link ${activeNav[0] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => { handleActiveNav(0); closeNav(); }}
              >
                Home
              </NavLink>

              <NavLink
                to="/aboutUs"
                className={`${styles.nav_text} nav-link ${activeNav[1] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => { handleActiveNav(1); closeNav(); }}
              >
                About Us
              </NavLink>

              <NavDropdown
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className={`nav-link ${styles.drop}`}
                title={
                  <span 
                    className={`${styles.nav_text} my-auto ${activeNav[2] ? styles.active : ""}`}
                    onClick={() => { handleActiveNav(2); closeNav(); }}
                  >
                    Services
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink 
                    to="/CloudInfrastructure" 
                    onClick={() => { handleActiveNav(2); closeNav(); }} 
                    className={styles.dropdownText}
                  >
                    Cloud Infrastructure Design & Deployment
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink 
                    to="/cloudSecurity" 
                    onClick={() => { handleActiveNav(2); closeNav(); }} 
                    className={styles.dropdownText}
                  >
                    Cloud Security & Compliance
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink 
                    to="/InfraAutomation" 
                    onClick={() => { handleActiveNav(2); closeNav(); }} 
                    className={styles.dropdownText}
                  >
                    Infrastructure as Code & Automation
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink 
                    to="/MonitoringOperations" 
                    onClick={() => { handleActiveNav(2); closeNav(); }} 
                    className={styles.dropdownText}
                  >
                    Monitoring & Operations
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink 
                    to="/KubernetesServerless" 
                    onClick={() => { handleActiveNav(2); closeNav(); }} 
                    className={styles.dropdownText}
                  >
                    Kubernetes & Serverless Solutions
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className={styles.dropdownItem}>
                  <NavLink 
                    to="/InnovationPrototyping" 
                    onClick={() => { handleActiveNav(2); closeNav(); }} 
                    className={styles.dropdownText}
                  >
                    Innovation & Prototyping
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavLink
                to="/contactUs"
                className={`${styles.nav_text} nav-link ${activeNav[3] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => { handleActiveNav(3); closeNav(); }}
              >
                Contact Us
              </NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;
