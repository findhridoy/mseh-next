import React from "react";
import { serviceData } from "../assets/serviceData";
import ServiceCard from "../components/ServiceCard";

const Service = () => {
  return (
    <section className="service section" id="service">
      <div className="container">
        <div className="service__content">
          <h3 className="service__title section__title">Our Services</h3>
          <h2 className="service__subtitle">
            Featured Service that We Provide
          </h2>
          <div className="service__data">
            {serviceData?.map((service) => (
              <ServiceCard service={service} key={service.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
