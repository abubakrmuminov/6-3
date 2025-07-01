import React from "react";

import logo from "../assets/logo.svg";
import face from "../assets/social/icon-facebook.svg";
import twitter from "../assets/social/icon-twitter.svg";
import pin from "../assets/social/icon-pinterest.svg";

export default function Footer() {
  return (
    <footer>
      <div className="contactFooter">
        <div className="container footerContact">
          <h2 className="contactTitle">Ready to get started?</h2>
          <button className="contact">contact us</button>
        </div>
      </div>
      <div className="container">
        <div className="footer">
          <div className="footerMain">
            <img src={logo} alt="logo" width={160} height={40} />
            <div className="footerNav">
              <a href="#">home</a>
              <a href="#">about</a>
            </div>
          </div>
          <div className="footerInfo">
            <span>987 Hillcrest Lane</span>
            <span>Irvine, CA</span>
            <span>California 92714</span>
            <span>Call Us : 949-833-7432</span>
          </div>
          <div className="footerSocial">
            <div className="socials">
              <a href="https://facebook.com" target="_blank">
                <img src={face} alt="facebook" />
              </a>
              <a href="https://pinterest.com" target="_blank">
                <img src={pin} alt="pinterest" />
              </a>
              <a href="https://twitter.com" target="_blank">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
            <span>Copyright 2020. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
