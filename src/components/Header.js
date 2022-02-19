/* eslint-disable jsx-a11y/anchor-is-valid */
import gsap from "gsap";
import React, { useEffect, useMemo, useState } from "react";
import { menuAnimation } from "../utils/Animation";
// import { menuAnimation } from "";

const Header = () => {
  const [play, setPlay] = useState(false);
  const tl = useMemo(() => gsap.timeline({ paused: true }), []);
  useEffect(() => {
    menuAnimation(tl);
  }, [tl]);
  useEffect(() => {
    if (play) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [tl, play]);

  const handleMenu = () => {
    setPlay(!play);
  };
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <a href="" className="nav__logo">
            MSEH Next()
          </a>
          <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Service
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Team
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Client
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
