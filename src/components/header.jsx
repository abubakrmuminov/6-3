import React from "react";

import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <nav className="headerNav">
              <a className="logo" href="#">
                <img src={logo} alt="" />
              </a>
              <ul className="nav">
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
              </ul>
            </nav>
            <button className="contact">contact us</button>
          </div>

          <section className="heroSection">
            <h1 className="heroHeading">
              Find the best <span className="headingSpan">talent</span>
            </h1>

            <div>
              <div className="rectangle"></div>
            <p className="heroText">
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
            </div>
          </section>
        </div>
      </header>
    </>
  );
}
