import React from "react";
import Footer from "../../components/Footer";
import CloudInfrastructureComponent from "../../components/CloudInfrastructure/CloudInfrastructure";

const CloudInfrastructurePage = () => {
  return (
    <>
      <section>
        <CloudInfrastructureComponent />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default CloudInfrastructurePage;