import React from "react";
import Footer from "../../components/Footer";
import InfraAutomationComponent from "../../components/InfraAutomation/InfraAutomation"; // ✅ correct component import

const InfraAutomation = () => {   // ✅ correct wrapper name
  return (
    <>
      <section>
        <InfraAutomationComponent />  {/* ✅ use renamed component */}
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default InfraAutomation;   // ✅ export correct wrapper
