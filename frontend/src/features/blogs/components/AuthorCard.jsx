import React from "react";
import "../styles/AuthorCard.css";

const AuthorCard = () => {
  return (
    <div className="author-card">

      <div className="author-left">
        <div className="author-avatar">
          BP
        </div>

        <div className="author-info">
          <h3>Bhavin Patel</h3>

          <p>Full Stack Developer</p>

          <span>
            Writes about React, Node.js, System Design
          </span>
        </div>
      </div>

      <button className="follow-btn">
        Follow
      </button>

    </div>
  );
};

export default AuthorCard;