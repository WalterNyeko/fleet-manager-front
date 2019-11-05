import React, { Component, Fragment } from "react";
import HomePage from "../../components/auth/Login";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showParagraph: true
    };
  }

  toggleParagraph = () => {
    this.setState({ showParagraph: !this.state.showParagraph });
  };

  render() {
    return (
      <Fragment>
        <HomePage
          showParagraph={this.toggleParagraph}
          show={this.state.showParagraph}
        />
      </Fragment>
    );
  }
}
