import React from "react";
import ReactDOM from "react-dom/client";

/*
*
* Header
* - Logo
* - Nav Items
* Body
* - Search
* - RestaurantContainer
*  - RestaurantCard
*   - Img
*   - Name
*   - Rating
*   - Cusines
*  - RestaurantCardContainer
* Footer
*  - Copyright
*  - Nav Items
* - Cart Item
*
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    ) 
}

const styleCard = {
    backgroundColor: '#f0f0f0',
}

const RestaurantCard = (props) => {
    const { resObj } = props;
    console.log(resObj);
    const { name, cusines, rating, address } = resObj;
    return (
        <div className="restaurant-card" style={styleCard}>
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
            <p>{name}</p>
            <p>{cusines}</p>
            <p>{rating}</p>
            <p>{address}</p>
        </div>
    )
}

const restaurantList = [
    {
        id: 1,
        name: "Restaurant 1",
        cusines: "Italian",
        rating: "4.5",
        address: "123 Main St, Anytown, USA"
    },
    {
        id: 2,
        name: "Restaurant 2",
        cusines: "Mexican",
        rating: "4.6",
        address: "124 Main St, Anytown, USA"
    },
    {
        id: 3,
        name: "Restaurant 3",
        cusines: "Japanese",
        rating: "4.7",
        address: "125 Main St, Anytown, USA"
    },
    {
        id: 4,
        name: "Restaurant 4",
        cusines: "Indian",
        rating: "4.5",
        address: "126 Main St, Anytown, USA"
    },
    {
        id: 5,  
        name: "Restaurant 5",
        cusines: "American",
        rating: "4.8",
        address: "126 Main St, Anytown, USA"
    }   
]

const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" className="search-box" />
            </div>
            <div className="restaurant-card-container">
                {restaurantList?.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resObj={restaurant}/>
                ))}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);