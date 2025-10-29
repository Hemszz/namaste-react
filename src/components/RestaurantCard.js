const RestaurantCard = (props) => {
    const { resObj } = props;
    const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264/";
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
            <img className="restaurant-image" src={CDN_URL + resObj?.cloudinaryImageId} alt={resObj?.name} style={styleImage}/>
            <p>{resObj?.name}</p>
            <p>{resObj?.cuisines?.join(", ")}</p>
            <p>{resObj?.avgRating}</p>
            <p>{resObj?.locality}</p>
        </div>
    )
}

export default RestaurantCard;