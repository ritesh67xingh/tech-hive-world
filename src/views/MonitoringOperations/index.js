import React from "react";
import Footer from "../../components/Footer";
import MonitoringOperationsComponent from "../../components/MonitoringOperations/MonitoringOperations";

const MonitoringOperations = () => {
  return (
    <>
      <section>
        <MonitoringOperationsComponent />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default MonitoringOperations;
