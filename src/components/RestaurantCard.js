import { CDN_URL } from "../utils/constants";
// import resList from "../utils/mockData";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  const styleCard = {
    backgroundColor: '#ffffff',
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
      <span>{avgRating} star  </span>
      <span>{sla.slaString}</span>
      {cuisines && cuisines.length > 0 && (
        <h5>{cuisines.join(', ')}</h5>
      )}
      <span>{costForTwo}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
