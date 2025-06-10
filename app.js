import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id:"parent"}, [
    React.createElement("h1", {id: "h1", key:"h1"}, "I am h1 tag"),
    React.createElement("h2", {id: "h2", key:"h2"}, "I am h2 tag")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

const jsxHeading = (<h1 id="heading">Namaster React</h1>);
const jsxroot = ReactDOM.createRoot(document.getElementById("jsxroot"));
jsxroot.render(jsxHeading);

//React Element

const title = (
    <h1>Namaste React From React Element</h1>
);

// Functional Component
const HeadingComponent = ()=> (
    <div className="container">
       {title}
        <h1 className="heading">Hello Functional Component</h1>
    </div>    
);
const mainroot = ReactDOM.createRoot(document.getElementById("mainroot"));
mainroot.render(<HeadingComponent />)


