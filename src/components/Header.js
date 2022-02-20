/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiMoon } from "react-icons/bi";
import { BsGearFill, BsSunFill } from "react-icons/bs";
import { FaUser, FaUserFriends } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav__logo">
          MSEH Next
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item ">
              <a href="#" className="nav__link active__link">
                <span className="nav__icon">
                  <AiFillHome />
                </span>
                <span className="nav__text">Home</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <span className="nav__icon">
                  <FaUser />
                </span>
                <span className="nav__text">About</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#service" className="nav__link">
                <span className="nav__icon">
                  <BsGearFill />
                </span>
                <span className="nav__text">Service</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#team" className="nav__link">
                <span className="nav__icon">
                  <FaUserFriends />
                </span>
                <span className="nav__text">Team</span>
              </a>
            </li>
            {/* <li className="nav__item">
              <a href="#" className="nav__link">
                <span className="nav__icon">
                  <FaUserPlus />
                </span>
                <span className="nav__text">Client</span>
              </a>
            </li> */}
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <span className="nav__icon">
                  <MdPermContactCalendar />
                </span>
                <span className="nav__text">Contact</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__mood">
          <span className="nav__mood--light">
            <BsSunFill />
          </span>
          <span className="nav__mood--dark">
            <BiMoon />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
