import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="section has-text-justified">
    <p className="title my-5 is-family-code is-size-1 has-text-link">
      Pluralsight Administration
    </p>
    <p className="subtitle mb-4 has-text-grey">
      React, Redux and React Router for ultra-responsive web apps.
    </p>
    <Link to="about" className="button is-link is-outlined is-family-code">
      Learn More
    </Link>
  </div>
);

export default HomePage;
