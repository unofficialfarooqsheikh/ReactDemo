import React from "react";

// Child Component
class Child extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello, {this.props.name}</h2>
        <h3>You are inside Child Component</h3>
        <h3>Your understanding on props should be: {this.props.status}</h3>
      </div>
    );
  }
}

export default Child;
