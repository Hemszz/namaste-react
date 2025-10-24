import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";

const App = () => {
    return (
        <React.StrictMode>
            <AppLayout />
        </React.StrictMode>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);