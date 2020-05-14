import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import NewEventsForm from "../NewEventsForm/NewEventsForm";
import EventsList from "../EventsList/EventsList";

class EventsPage extends Component {
  state = {
    heading: "Events",
  };
  componentDidMount() {
    this.props.dispatch({ type: "GET_EVENTS_DATA" });
  }
  render() {
    return (
      <div>
        <NewEventsForm />
        <p className="event-intro">Events</p>
        <EventsList />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EventsPage);
