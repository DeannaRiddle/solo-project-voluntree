import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

// material components
import { TextField, Button } from "@material-ui/core";

class NonProfitPage extends Component {
  state = {
    organizationName: "",
    contactName: "",
    address: "",
    email: "",
    password: "",
    missionStatement: "",
  };

  changeRegistrationField = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  submitNonProfit = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: "NONPROFIT_REGISTER",
      payload: this.state,
    });
  };

  render() {
    return (
      <div>
        <h2>Non Profit Registration</h2>

        <form onSubmit={this.submitNonProfit}>
          <TextField
            type="text"
            placeholder="Name of Non-Profit"
            label="Organization Name"
            onChange={this.changeRegistrationField("organizationName")}
          />

          <TextField
            type="text"
            placeholder="Main Contact Name"
            label="Main Contact Name"
            onChange={this.changeRegistrationField("contactName")}
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
            placeholder="Mission Statement"
            label="Mission Statement"
            onChange={this.changeRegistrationField("missionStatement")}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NonProfitPage);
