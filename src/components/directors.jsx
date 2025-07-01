import React from "react";

import nikita from '../assets/about/team-members/nikita.jpg'
import cristian from '../assets/about/team-members/cristian.jpg'
import cruz from '../assets/about/team-members/cruz.jpg'
import drake from '../assets/about/team-members/drake.jpg'
import griffin from '../assets/about/team-members/griffin.jpg'

export default function Directors() {
  return (
    <section className="directors">
      <h2 className="meetDirectors">Meet the directors</h2>
      <div>
        <div className="directorCard">
          <div className="director">
            <img src={nikita} alt="" />
            <span className="directorName">Nikita Marks</span>
            <span className="directorJob">Founder & CEO</span>
          </div>
          <button>+</button>
        </div>

        <div className="directorCard">
          <div className="director">
            <img src= alt="" />
            <span className="directorName">Cristian Duncan</span>
            <span className="directorJob">Co-founder & COO</span>
          </div>
          <button>+</button>
        </div>

        <div className="directorCard">
          <div className="director">
            <img src="" alt="" />
            <span className="directorName">Cruz Hamer</span>
            <span className="directorJob">Co-founder & CTO</span>
          </div>
          <button>+</button>
        </div>

        <div className="directorCard">
          <div className="director">
            <img src="" alt="" />
            <span className="directorName">Drake Heaton</span>
            <span className="directorJob">Business Development Lead</span>
          </div>
          <button>+</button>
        </div>

        <div className="directorCard">
          <div className="director">
            <img src="" alt="" />
            <span className="directorName">Griffin Wise</span>
            <span className="directorJob">Lead Marketing</span>
          </div>
          <button>+</button>
        </div>

        <div className="director">
          <span className="directorName">Aden Allan</span>
          <span className="directorJob">
            “Empowered teams create truly amazing products. Set the north star
            and let them follow it.”
          </span>
          <div className="directorSocial"></div>
        </div>
      </div>
    </section>
  );
}
