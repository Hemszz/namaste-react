import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
    const [filteredList, setFilteredList] = useState(restaurantList);
    return (
        <div className="body">
            <div className="filter-container">
                <button className="filter-btn" 
                onClick={ () => {
                    setFilteredList((prev) => prev.filter((restaurant) => Number(restaurant.rating) > 4.7));
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-card-container">
                {filteredList?.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resObj={restaurant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;