import { CDN_URL } from "../utils/constants";
import resList from "../utils/mockData";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisine, rating, deliveryTime, cost } = resData?.data;
  const styleCard = {
    backgroundColor: '#F0F0F5',
  };

  return (
    <div className='res-card' style={styleCard}>
      <div>
      <img
        className='res-logo'
        alt='res-logo'
        src={CDN_URL + cloudinaryImageId}
      />
      </div>
      <div className="res-details">
      <h3>{name}</h3>
      {cuisine && cuisine.length > 0 && (
        <h4>{cuisine.join(', ')}</h4>
      )}
      <h4>{rating} star</h4>
      <h4>{deliveryTime}</h4>
      <h4>{cost}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
