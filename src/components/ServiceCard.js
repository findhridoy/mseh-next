import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="serviceCard">
      <div className="serviceCard__image">
        <img src={service?.icon} alt="service icon" />
      </div>
      <h3 className="serviceCard__title">{service?.title}</h3>
      <p className="serviceCard__decription">{service?.description}</p>
    </div>
  );
};

export default ServiceCard;
