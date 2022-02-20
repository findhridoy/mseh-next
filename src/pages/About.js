/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import banner from "../assets/images/banner.png";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__content">
          <div className="about__image">
            <img src={banner} alt="banner img" />
          </div>
          <div className="about__data">
            <h3 className="about__title section__title">More About Us!</h3>
            <h1 className="about__subtitle">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="about__text">
              Ever wanted to buy a book but could not because it was too
              expensive? Worry not! Because Nogozo is at your rescue! Nogozo
              team is committed to bring to you all kinds of best books.
            </p>
            <a href="#" className="about__btn primary__btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
