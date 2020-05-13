import React from "react";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p className="about-info">
        Our founder Deanna Riddle discovered a need to connect Non-Profit
        Organizations and Volunteers. Deanna had the desire to volunteer her
        time, with a busy schedule it proved difficult to seek an Organization
        to work with. As a result VolunTree was born. VolunTree is an
        application that connects Volunteers with Non-Profit Organizations.
        Volunteers can register with the site then look at the Events page to
        find an event they would like to volunteer at. The volunteer will in
        turn contact the Organization and sign up for the event they choose.
        Non-Profit Organizations are able to register with the site.
        Organizations must register with their name, main point of contact, and
        contact information. Then they will be able to add new events to the
        site.
      </p>
    </div>
  </div>
);

export default AboutPage;
