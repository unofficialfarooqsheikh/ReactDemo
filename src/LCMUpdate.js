import React, { Component } from "react";

export default class LCMUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "constructor Method"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "componentDidMount Method" });
    }, 5000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Props Changed to:", nextProps, "State Changed to:", nextState);
    console.log(
      "Props Changed from:",
      this.props,
      "State Changed From:",
      this.state
    );
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("previous-state").innerHTML =
      "The previous state was " + prevState.name;
    // return prevState;
  }
  componentDidUpdate() {
    document.getElementById("current-state").innerHTML =
      "The current state is " + this.state.name;
  }
  render() {
    return (
      <>
        <h5>This is a {this.state.name}</h5>
        <p id="current-state"></p>
        <p id="previous-state"></p>
      </>
    );
  }
}
