
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";


function AppLayout() {
    return (
        <React.Fragment>
            <Header />
            <Body />
        </React.Fragment>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element : <AppLayout/>,
        errorElement : <Error/>,
    },
    {
        path:"/about",
        element : <About />,
    },
    {
        path:"/contact",
        element : <Contact />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);