import React, { Component } from "react";

export class ChildComponent extends Component {
  constructor(props) {
    super(props);
    console.log("i am displayed from constructor");
    this.state = {
      message: "i wrote this in Constructor Method",
      sandesh: "i wrote this also in Constructor Method"
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("i am displayed from getDerivedStateFromProps");
    return { message: props.messageFromParent };
  }

  componentDidMount() {
    console.log("i am displayed from componentDidMount");
    // this.setState({ sandesh: "I changed it before you can see it." });
  }

  render() {
    console.log("i am displayed from render");
    return (
      <div>
        This is a {this.state.message}
        <br />
        Another {this.state.sandesh}
      </div>
    );
  }
}

export default class LCMMount extends Component {
  render() {
    return (
      <div>
        <p>COMPONENT LIFECYCLE </p>
        {/* <ChildComponent messageFromParent="getDerivedStateFromProps Method" /> */}
      </div>
    );
  }
}
