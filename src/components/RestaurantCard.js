import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resObj } = props;

    const { name, cuisines, avgRating, locality, cloudinaryImageId, costForTwoString, sla } = resObj;
    const styleCard = {
        backgroundColor: '#f0f0f0',
    }
    const styleImage = {
        width: '100%',
        height: '100px',
        objectFit: 'cover',
    }

    return (
        <div className="restaurant-card" style={styleCard}>
            <img className="restaurant-image" src={CDN_URL + cloudinaryImageId} alt={name} style={styleImage}/>
            <p>Name: {name}</p>
            <p>Cuisines: {cuisines?.join(", ")}</p>
            <p>Rating: {avgRating}</p>
            <p>Locality: {locality}</p>
            <p>Cost for Two: {costForTwoString}</p>
            <p>Delivery Time: {sla?.slaString}</p>
        </div>
    )
}

export default RestaurantCard;