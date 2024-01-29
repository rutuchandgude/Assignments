
import {LOGO_URL} from "../utils/constants";
import { useEffect, useState } from "react";

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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
