
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";


function AppLayout() {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element : <AppLayout/>,
        children : [
        {
            path:"/",
            element : <Body/>,
        },
        {
            path:"/about",
            element : <About />,
        },
        {
            path:"/contact",
            element : <Contact />,
        }
    ],
    errorElement : <Error/>,
},
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);