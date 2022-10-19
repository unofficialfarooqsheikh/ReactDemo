import React from "react";

class StateExample extends React.Component {
  constructor() {
    super();
    this.state = { user: "Team" };
    this.stateless = { user: "Again Team!" };
  }
  render() {
    return (
      <div>
        <h1>Hello {this.stateless.user}</h1>
        <h1>Hello {this.state.user}</h1>

        <button
          onClick={() => {
            this.stateless.user = "I Changed but You Can't see me 👋";
            alert(this.stateless.user);
          }}
        >
          stateless change
        </button>
        <br />
        <button
          onClick={() => {
            this.setState({ user: "You can See the Change now! " });
          }}
        >
          stateless change
        </button>
      </div>
    );
  }
}

export default StateExample;
