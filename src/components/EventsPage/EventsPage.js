import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class EventsPage extends Component {
  state = {
    heading: "Events",
  };

  render() {
    return (
      <div>
        <h2>{this.state.eventTable}</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EventsPage);
