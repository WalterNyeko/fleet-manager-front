import React, { Component, Fragment } from "react";
import Register from "../../components/registration/Registration";
import { connect } from "react-redux";
import { signUp } from "../../redux/actions/auth/Login";
class Registration extends Component {
  state = {
    username: "",
    password: ""
  };

  onChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const data = {
      username,
      password
    };
    this.props.signUp(data);
  };
  render() {
    return (
      <Fragment>
        <Register
          handleSubmit={this.handleSubmit}
          onChangeHandler={this.onChangeHandler}
          username={this.state.username}
          password={this.state.password}
        />
      </Fragment>
    );
  }
}
export default connect(null, { signUp })(Registration);
