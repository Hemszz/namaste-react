import React from "react";
import ReactDOM from "react-dom/client";

// Title Component

const Title = () => (
    <h1 className="heading" tabIndex={1}>
        Title - React title
    </h1>
);

const number = 10;

// React Component
// Function based component - New
// Class based component - Old
// always start with capital letter

// Component Composition 
const HeadingComponent = () => (
    <div id="container">
        {Title()} 
        {number}
        <Title></Title>
        <Title />
        <h1 className="heading" tabIndex={1}>
            Namaste React
        </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);