import "./styles/navigation.css";
import SwachhPariveshLogo from "../assets/NGO_Logo.png";
import Hamburger from "../assets/hamburger.svg";
import DonateHand from "../assets/donate-hand.svg";

import { Link } from "react-router-dom";
function Navigation() {
  // Hamburger Menu
  let links = document.querySelectorAll(".nav__menu__link");

  const hamburgerHandler = () => {
    const Hamburger = document.getElementById("hamburger__menu__btn");
    Hamburger.classList.toggle("line--active");
    let nav = document.getElementById("nav__menu__container");
    let menu = document.getElementById("menu__container");
    nav.classList.toggle("nav__menu__container--active");
    menu.classList.toggle("nav__menu--active");
  };

  links.forEach((link) => {
    link.addEventListener("click", () => {
      let hamburgerIcon = document.getElementById("hamburger__icon");
      let nav = document.getElementById("nav__menu__container");
      let menu = document.getElementById("menu__container");
      hamburgerIcon.classList.remove("hamburger__icon--active");
      nav.classList.remove("nav__menu__container--active");
      menu.classList.remove("nav__menu--active");
    });
  });
  return (
    <div className="nav__container cent">
      <div className="nav__container__item row">
        <div className="ngo__logo__container cent">
          <Link to="/">
            <img
              className="logo_img"
              src={SwachhPariveshLogo}
              alt="Swachh Parivesh NGO"
            />
          </Link>
          <h1 className="text__logo">Swachh Parivesh</h1>
        </div>
        <div
          className="nav__hamburger__container row"
          id="nav__menu__container"
        >
          <div className="hamburger__active__support">
            <button
              className="hamburger__btn col cent"
              id="hamburger__menu__btn"
              onClick={hamburgerHandler}
            >
              <div className="line" id="line1"></div>
              <div className="line" id="line2"></div>
              <div className="line" id="line3"></div>
            </button>
          </div>
          <div className="menu__container" id="menu__container">
            <ul className="nav__menu__ul" id="nav__menu">
              <li>
                <Link className="nav__menu__link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav__menu__link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="nav__menu__link" to="/media">
                  Media
                </Link>
              </li>
              <li>
                <Link className="nav__menu__link desk__btn" to="/donation">
                  Donate
                  <img
                    className="donation__icon"
                    src={DonateHand}
                    width={20}
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
