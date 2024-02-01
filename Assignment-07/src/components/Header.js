
import {LOGO_URL} from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

 const Header = () => {
const [btnNameReact, setBtnNameReact] = useState("Login");
console.log("Header render");

//If no dependency array => useEffect is called on every render
//If dependency array is empty = [] => useEffect is called on initial render(just once)
//If dependency array is [btnNameReact] => called everytime btnNameReact is updated.
useEffect(()=>{
    console.log("useEffect called");
},btnNameReact);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"   
                    src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li to="/">
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link to="About">About Us</Link>
                    </li>
                    <li>
                        <Link to="Contact">Contact Us</Link>
                        </li>
                    <li>Cart</li>
                    <button
                     className="login" 
                     onClick={()=> {
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                        }}>
                          {btnNameReact}
                        </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
