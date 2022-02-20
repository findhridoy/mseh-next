/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const TeamCard = ({ team }) => {
  return (
    <div className="teamCard">
      <div className="teamCard__image">
        <img src={team?.image} alt="" />
        <div className="teamCard__image--overlay">
          <div className="overlay__data">
            <span className="overlay__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <div className="overlay__icon">
              <a className="overlay__link" href="#">
                <FaFacebookF />
              </a>
              <a className="overlay__link" href="#">
                <FaTwitter />
              </a>
              <a className="overlay__link" href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
      <h3 className="teamCard__title">{team?.name}</h3>
      <span className="teamCard__role">{team?.role}</span>
    </div>
  );
};

export default TeamCard;
