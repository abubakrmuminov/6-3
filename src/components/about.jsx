import React from "react";

import experiencedIcon from "../assets/experienced-individuals.svg";
import implementIcon from "../assets/easy-to-implement.svg";
import productivityIcon from "../assets/enhanced-productivity.svg";

export default function About() {
  return (
    <section className="info">
      <div className="container buildManage">
        <div className="buildTextBox">
          <div className="rectangle2"></div>
          <h2 className="buildText">
            Build & manage distributed teams like no one else.
          </h2>
        </div>
        <div className="secriveList">
          <div className="services">
            <img
              src={experiencedIcon}
              alt="Experienced Individuals"
              width={73}
              height={72}
            />
            <div className="serviceContent">
              <h3 className="serviceName">Experienced Individuals</h3>
              <p className="serviceText">
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </div>

          <div className="services">
            <img
              src={implementIcon}
              alt="Easy to Implement"
              width={73}
              height={72}
            />
            <div className="serviceContent">
              <h3 className="serviceName">Easy to Implement</h3>
              <p className="serviceText">
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </div>

          <div className="services">
            <img
              src={productivityIcon}
              alt="Enhanced Productivity"
              width={73}
              height={72}
            />
            <div className="serviceContent">
              <h3 className="serviceName">Enhanced Productivity</h3>
              <p className="serviceText">
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
