
import React from "react";
import ReactDOM from "react-dom/client";
/*
* Header
*  -Logo
*  -Nav Items
*Body
*  -Search
*  -RestaurantContainer
*    -RestaurantCard
*Footer
*  -Copyright
*  -Links
*  -Address
*  -Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    console.log(props);
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo"
            alt="res-card"
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
};


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="MEghna Foods" cuisine="Biryani,North Indian,Asian"/>
                <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    )
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);