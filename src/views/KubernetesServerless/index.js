import React from "react";
import Footer from "../../components/Footer";
import KubernetesServerlessComponent from "../../components/KubernetesServerless/KubernetesServerless"; 
// ✅ import the new component

const KubernetesServerless = () => {   // ✅ wrapper name
  return (
    <>
      <section>
        <KubernetesServerlessComponent /> {/* ✅ use component */}
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default KubernetesServerless;  // ✅ export wrapper
