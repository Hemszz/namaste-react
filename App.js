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
            React.createElement("h1", {id: "child2"}, "Hemanth is here"), 
            React.createElement("h2", {id: "child3"}, "Hemanth is here")
        ]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
