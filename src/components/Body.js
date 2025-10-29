import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        console.log("UseEffect called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8452145&lng=77.6601695&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(json?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json);
    }

    if(listOfRestaurants?.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                            const filteredRestaurantList = listOfRestaurants?.filter((restaurant) => {
                            restaurant?.info?.name?.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
                        });
                        setFilteredRestaurantList(filteredRestaurantList);
                    }}>
                        Search
                    </button>
                </div>
            </div>
            <div className="filter-container">
                <button className="filter-btn" 
                onClick={ () => {
                    setFilteredRestaurantList((prev) => prev.filter((restaurant) => Number(restaurant?.info?.rating?.rating_text) > 4.7));
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-card-container">
                {filteredRestaurantList?.map((restaurant) => (
                    <RestaurantCard key={restaurant?.info?.id} resObj={restaurant?.info}/>
                ))}
            </div>
        </div>
    )
}

export default Body;