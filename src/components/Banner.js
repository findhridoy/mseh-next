/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoMdCloudDownload } from "react-icons/io";
import banner from "../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__content">
          <div className="banner__data">
            <h1 className="banner__title">
              MANAGE ALL OF YOUR STUFF USING A MSEH Next.
            </h1>
            <p className="banner__text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
            <a href="#" className="banner__btn primary__btn">
              <IoMdCloudDownload />
              Download Now
            </a>
          </div>
          <div className="banner__image">
            <img src={banner} alt="banner img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
