const RestaurantCard = (props) => {
    const { resObj } = props;
    const { name, cusines, rating, address } = resObj;
    const styleCard = {
        backgroundColor: '#f0f0f0',
    }
    
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

export default RestaurantCard;