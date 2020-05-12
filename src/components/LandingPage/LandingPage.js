import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

import "./LandingPage.css";

class LandingPage extends Component {
  state = {
    heading: "About VolunTree",
  };

  onLogin = (event) => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>

        <div className="grid">
          <div className="grid-col grid-col_8">
            <p>
              Our founder Deanna Riddle discovered a need to connect Non-Profit
              Organizations and Volunteers. Deanna had the desire to volunteer
              her time, with a busy schedule it proved difficult to seek an
              Organization to work with. As a result VolunTree was born.
            </p>

            <p>
              VolunTree is an application that connects Volunteers with
              Non-Profit Organizations. Volunteers can register with the site
              then look at the Events page to find an event they would like to
              volunteer at. The volunteer will in turn contact the Organization
              and sign up for the event they choose.
            </p>

            <p>
              Non-Profit Organizations are able to register with the site.
              Organizations must register with their name, main point of
              contact, and contact information. Then they will be able to add
              new events to the site.
            </p>
          </div>
          <div className="grid-col grid-col_4">
            <h3>Already a Member?</h3>
            <button className="btn btn_sizeFull" onClick={this.onLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
