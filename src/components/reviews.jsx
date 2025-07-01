import React from "react";
import kady from "../assets/home/succes/kady.jpg";
import arthur from "../assets/home/succes/arthur.jpg";
import aisha from "../assets/home/succes/aisha.jpg";

export default function Reviews() {
  return (
    <section className="reviewsSection">
      <div className="container reviews">
        <h2 className="reviewsTitle">
          Delivering real results for top companies. Some of our
          <span className="reviewsSpan">success stories.</span>
        </h2>
        <div className="userReviews">
          <div className="review">
            <p className="reviewText">
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </p>
            <span className="reviewer">Kady Baker</span>
            <span className="reviewerJob">Product Manager at Bookmark</span>
            <div className="avatarBox">
              <img
                src={kady}
                alt="avatar"
                width={62}
                height={62}
                className="reviewerAvatar"
              />
            </div>
          </div>
          <div className="review">
            <p className="reviewText">
              “We needed to automate our entire onboarding process. The team
              came in and built out the whole journey. Since going live, user
              retention has gone through the roof!”
            </p>
            <span className="reviewer">Aiysha Reese</span>
            <span className="reviewerJob">Founder of Manage</span>
            <div className="avatarBox">
              <img
                src={aisha}
                alt="avatar"
                width={62}
                height={62}
                className="reviewerAvatar"
              />
            </div>
          </div>
          <div className="review">
            <p className="reviewText">
              “Amazing. Our team helped us build an app that delivered a new
              experience for hiring a physio. The launch was an instant success
              with 100k downloads in the first month.”
            </p>
            <span className="reviewer">Arthur Clarke</span>
            <span className="reviewerJob">Co-founder of MyPhysio</span>
            <div className="avatarBox">
              <img
                src={arthur}
                alt="avatar"
                width={62}
                height={62}
                className="reviewerAvatar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
