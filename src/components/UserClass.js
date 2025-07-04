import React from "react";
import InnerChild from "./InnerchildClass";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child constructor");
  }
  componentDidMount() {
    console.log("Child component did mount");
  }
  render() {
    console.log("child Render");
    const { name, location, contact } = this.props;

    return (
      <div>
        <h1>Author name:{name}</h1>
        <h2>Location{location}</h2>
        <h3>Contact{contact}</h3>
        <InnerChild></InnerChild>
      </div>
    );
  }
}

export default UserClass;
