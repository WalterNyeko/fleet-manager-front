import React, { Component, Fragment } from "react";
import LoginPage from "../../components/auth/Login";
import { signIn } from "../../redux/actions/auth/Login";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const data = {
      username,
      password
    };
    this.props.signIn(data);
  };
  render() {
    return (
      <Fragment>
        <LoginPage
          handleSubmit={this.handleSubmit}
          onChangeHandler={this.onChangeHandler}
          username={this.state.username}
          password={this.state.password}
        />
      </Fragment>
    );
  }
}
export default connect(null, { signIn })(Login);
