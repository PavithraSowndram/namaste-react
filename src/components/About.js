import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
// const AboutUs = () => {
//   return (
//     <div className="about-us-container">
//       <h1> This is namaste react web series</h1>
//       <UserClass
//         name={"Akshay"}
//         location={"Chennai"}
//         contact={"pavi@gmail.com"}
//       />
//     </div>
//   );
// };

class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
    this.state = {
      userInfo: {
        name: "",
        location: "",
        contact: "",
      },
    };
  }

  async componentDidMount() {
    console.log("Parent component did mount");
    const data = await fetch("https://api.github.com/users/PavithraSowndram");
    const json = await data.json();
    this.setState(json);
  }

  render() {
    console.log("Parent Render");
    const { name, location, contact, avatar_url } = this.state.userInfo;
    return (
      <div className="about-us-container">
        <h1> This is namaste react web series</h1>
        <UserClass name={name} location={location} contact={contact} />
      </div>
    );
  }
}

export default AboutUs;
