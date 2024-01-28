import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import Header from './Header'; 
import Shimmer from './Shimmer';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Body = ( ) => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const handleSearch = (searchText) => {
      const filteredList = listOfRestaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
    
      setFilteredRestaurant(filteredList);
    };
    

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      setListOfRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus==false){
      return(
        <>
        <Header />
        <h1 className="onlineStatus">Looks like you're offline!! Please check your internet connection.</h1>
        </>
        );
    }

    if (listOfRestaurants.length === 0) {
      return (
        <>
          <Header onSearch={handleSearch} />
          <button className="filter-btn">Top Rated Restaurant</button>
          <Shimmer />
        </>
      );
    }

    
    
    return (
      <>
     
        <Header onSearch={handleSearch} />
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}>
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
        {filteredRestaurant && filteredRestaurant.length > 0 ? (
        filteredRestaurant.map((restaurant) => (
        <Link key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}> <RestaurantCard  resData={restaurant} /></Link>
      ))
      ) : (
      <p>No restaurants found.</p>
      )}
      </div>

      </>
    );
    
  };
  
  export default Body;
