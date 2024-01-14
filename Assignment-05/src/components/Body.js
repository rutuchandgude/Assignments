import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
              {resList.map((restaurant)=>{
                return <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
              })}
            </div>
        </div>
    );
};

export default Body;