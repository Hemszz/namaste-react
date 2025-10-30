import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/Notfound";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ],
        errorElement: <NotFound />
    },
    {
        path: "*",
        element: <NotFound />,
    }
])

const App = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={appRouter} />
        </React.StrictMode>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);