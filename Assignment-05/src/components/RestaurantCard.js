
import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
   const  {resData} = props;

    const {cloudinaryImageId,
      name,
      cuisines,
      area,
      lastMileTravelString,
      costForTwoString,
      avgRating} =resData?.data;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo"
            alt="res-card"
            src={CDN_URL + cloudinaryImageId } 
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{area}</h4>
            <span>
            <h4>{avgRating}</h4>
            <h4>{lastMileTravelString}</h4>
            <h4>{costForTwoString}</h4>
            </span>

        </div>
    );
};

export default RestaurantCard;
