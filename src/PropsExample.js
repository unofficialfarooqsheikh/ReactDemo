import React from "react";
import Child from "./PropsChild";

class PropsExample extends React.Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        <Child name="Team" status="perfect by now" />
      </div>
    );
  }
}

export default PropsExample;
