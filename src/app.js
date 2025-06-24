/* App-Layout :
    Header
        - Logo
        - Nav Items
    Body
        - Search
        - Restro container
            - Restro cards
                -Img
                - Name of Res, Star Rating, Cuisine, Delivery time
    Footer
        - Copyright
        - Links
        - Address
        - Contact
*/

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
