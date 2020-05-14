import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class EventsList extends Component {
  render() {
    const eventArray = this.props.store.eventsReducer.map((event, index) => {
      return (
        <div key={index}>
          <h1>{event.eventName}</h1>
        </div>
      );
    });

    return <div>{eventArray}</div>;
  }
}

export default connect(mapStoreToProps)(EventsList);
