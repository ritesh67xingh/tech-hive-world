import React, { useState } from "react";
import Banner from '../../components/Banner';
import ChoosingUs from "../../components/ChoosingUs";
import ServicesHome from "../../components/ServicesHome";
import CaseStudy from "../../components/CaseStudy";
import Real from "../../components/Real";
import Footer from "../../components/Footer";
import AboutUsHome from "../../components/AboutUsHome";
import Testimonial from "../../components/Testimonial";

import ZohoFormModal from "../../components/ZohoFormModal/ZohoFormModal";

const Home = () => {

  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <>
      {/* Banner Section */}
      <section>
        <Banner openForm={openForm} />
      </section>

      {/* Choosing Section */}
      <section>
        <ChoosingUs />
      </section>

      {/* Services Section */}
      <section>
        <ServicesHome openForm={openForm} />
      </section>

      {/* Case Study */}
      <section>
        <CaseStudy />
      </section>

      {/* Real Section */}
      <section>
        <Real openForm={openForm} />
      </section>

      {/* About Us Section */}
      <section>
        <AboutUsHome openForm={openForm} />
      </section>

      {/* Testimonial Section */}
      <section>
        <Testimonial />
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>

      {/* GLOBAL POPUP */}
      {showForm && <ZohoFormModal onClose={closeForm} />}
    </>
  );
};

export default Home;
