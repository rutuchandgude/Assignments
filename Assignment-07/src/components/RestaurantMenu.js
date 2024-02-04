import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
     fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch(
      
  'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=229&catalog_qa=undefined&submitAction=ENTER'
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

//    const {name} = resInfo?.cards[0]?.card?.card?.info;

    return resInfo === null ? (
    <Shimmer/>
    ):(
 <div className="menu">
 <h1>Name of the restaurant</h1>
 {/* <h3>{cuisines.join(",")}</h3>
 <h3>{costForTwoMessage}</h3> */}
 <h2>Menu</h2>
 <ul>
    <li>Biryani</li>
    <li>Burgers</li>
    <li>Diet Cock</li>
 </ul>
 </div>
    );
};
export default RestaurantMenu;