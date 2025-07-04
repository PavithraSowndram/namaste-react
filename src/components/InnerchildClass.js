import React from "react";

class InnerChild extends React.Component {
  constructor(props) {
    super(props);
    console.log("Inner child constructor");
  }
  componentDidMount() {
    console.log("Inner child component did mount");
  }
  render() {
    console.log("Inner child render");
    return (
      <div>
        <h1>Inner Child</h1>
      </div>
    );
  }
}
export default InnerChild;
