import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import swiggy_API_URL from "../utils/constants";
import Shimmer from "./Shimmer";
const Body = () => {

  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  
  useEffect(()=>{
fetchData();
  },[]);
const fetchData = async () =>{
  const data =await fetch(
    "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
const json = await data.json();
console.log(json);
//Optional Chaining
setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
};

if(listOfRestaurants.length === 0){
  return <Shimmer/>;
}
  return (
        <div className="body">
            <div className="filter">
              <button className="filter-btn"
               onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                  (res)=> res.data.avgRating > 4
                );
              setListOfRestaurant(filteredList);
               }} 
               >
                Top Rated Restaurants</button>
              </div>
            <div className="res-container">
              {listOfRestaurants.map((restaurant)=>{
                return <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
              })}
            </div>
        </div>
    );
};

export default Body;