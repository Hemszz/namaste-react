import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1", 
    {
        id: "parent"
    }, 
    React.createElement(
        "div", 
        {
            id: "child"
        },
        [
            React.createElement("h1", {id: "child2", key: "heading1"}, "Hemanth h1 is here"), 
            React.createElement("h2", {id: "child3", key: "heading2"}, "Hemanth h2 is here")
        ]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
