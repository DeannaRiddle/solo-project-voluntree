import React from "react";
import "./Footer.css";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>
    <div className="footer-container">
      <p className="footer-quote">
        ONE OF THE GREATEST GIFTS YOU CAN GIVE, IS YOUR TIME!
      </p>
    </div>
  </footer>
);

export default Footer;
