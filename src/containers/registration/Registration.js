import React, { Component, Fragment } from "react";
import Register from "../../components/registration/Registration";
import history from "../configs/history";

export default class Registration extends Component {
  handleSubmit = e => {
    e.preventDefault();
    history.push("/home");
  };
  render() {
    return (
      <Fragment>
        <Register handleSubmit={this.handleSubmit} />
      </Fragment>
    );
  }
}
