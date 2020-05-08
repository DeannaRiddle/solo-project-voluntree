import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

// material components
import { TextField, Button } from "@material-ui/core";

class NewEventsFormPage extends Component {
  state = {
    eventName: "",
    eventDate: "",
    eventType: "",
    eventAddress: "",
    startingTime: "",
    endingTime: "",
    jobOne: "",
    numOfJobOne: "",
    jobTwo: "",
    numOfJobTwo: "",
    jobThree: "",
    numOfJobThree: "",
    jobFour: "",
    numOfJobFour: "",
  };

  changeRegistrationField = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  submitNewEvent = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: "NEW_EVENT",
      payload: this.state,
    });
    this.props.history.push("/event");
  };

  render() {
    return (
      <div>
        <h2>New Event Form</h2>

        <form onSubmit={this.submitNewEvent}>
          <TextField
            type="text"
            placeholder="Name of Event"
            label="Name of Event"
            onChange={this.changeRegistrationField("eventName")}
          />

          <TextField
            type="date"
            placeholder="Event Date"
            label="Event Date"
            onChange={this.changeRegistrationField("eventDate")}
          />

          <TextField
            type="text"
            placeholder="Type of Event"
            label="Event Type"
            onChange={this.changeRegistrationField("eventType")}
          />
          <TextField
            type="text"
            placeholder="Event Address"
            label="Address"
            onChange={this.changeRegistrationField("eventAddress")}
          />
          <TextField
            type="time"
            placeholder="Starting Time"
            label="Start Time"
            onChange={this.changeRegistrationField("startingTime")}
          />

          <TextField
            type="time"
            placeholder="Ending Time"
            label="Ending time"
            onChange={this.changeRegistrationField("endingTime")}
          />
          <TextField
            type="text"
            placeholder="Volunteer Job"
            label="Volunteer Job"
            onChange={this.changeRegistrationField("jobOne")}
          />
          <TextField
            type="text"
            placeholder="Number Needed"
            label="Number Needed"
            onChange={this.changeRegistrationField("numOfJobOne")}
          />
          <TextField
            type="text"
            placeholder="Volunteer Job"
            label="Volunteer Job"
            onChange={this.changeRegistrationField("jobTwo")}
          />
          <TextField
            type="text"
            placeholder="Number Needed"
            label="Number Needed"
            onChange={this.changeRegistrationField("numOfJobTwo")}
          />
          <TextField
            type="text"
            placeholder="Volunteer Job"
            label="Volunteer Job"
            onChange={this.changeRegistrationField("jobThree")}
          />
          <TextField
            type="text"
            placeholder="Number Needed"
            label="Number Needed"
            onChange={this.changeRegistrationField("numOfJobThree")}
          />
          <TextField
            type="text"
            placeholder="Volunteer Job"
            label="Volunteer Job"
            onChange={this.changeRegistrationField("jobFour")}
          />
          <TextField
            type="text"
            placeholder="Number Needed"
            label="Number Needed"
            onChange={this.changeRegistrationField("numOfJobFour")}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NonProfitPage);
