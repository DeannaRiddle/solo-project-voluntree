import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

// material components
import { TextField, Button } from "@material-ui/core";

class VolunteerPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
    whyVolunteer: "",
  };

  changeRegistrationField = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  submitNewVolunteer = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: "VOLUNTEER_REGISTER",
      payload: this.state,
    });
    this.props.history.push("/events");
  };

  render() {
    return (
      <div>
        <h2>Volunteer Registration</h2>

        <form onSubmit={this.submitNewVolunteer}>
          <TextField
            type="text"
            placeholder="First Name"
            label="First Name"
            onChange={this.changeRegistrationField("FirstName")}
          />

          <TextField
            type="text"
            placeholder="Last Name"
            label="Last Name"
            onChange={this.changeRegistrationField("LastName")}
          />

          <TextField
            type="text"
            placeholder="Address"
            label="Address"
            onChange={this.changeRegistrationField("address")}
          />

          <TextField
            type="text"
            placeholder="Email"
            label="Email"
            onChange={this.changeRegistrationField("email")}
          />

          <TextField
            type="password"
            placeholder="Password"
            label="Password"
            onChange={this.changeRegistrationField("password")}
          />
          <TextField
            type="text"
            placeholder="Why Volunteer"
            label="Why Volunteer"
            onChange={this.changeRegistrationField("whyVolunteer")}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(VolunteerPage);
