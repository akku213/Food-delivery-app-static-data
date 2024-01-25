import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Header from './Header'; 

// const Body = () =>{
    
//     const [listOfRestaurants, setListOfRestaurants] = useState(resList);
//     const [filteredRestaurant, setFilteredRestaurant] = useState([]);
//     const handleSearch = (searchText) => {
        
//         const filteredList = resList.filter(
//           (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
//         );
//         setListOfRestaurants(filteredList);
//         setFilteredRestaurant(filteredList);
//       };
//     return(
//         <>
//          <Header onSearch={handleSearch} />
//         <div className="filter">
//             <button className="filter-btn" onClick={() => {
//                 const filteredList = listOfRestaurants.filter(
//                     (restaurant) => restaurant.data.rating > 4
//                 );                
//                 setListOfRestaurants(filteredList);
//             }}>Top Rated Restaurant</button>
//         </div>
//         <div className='res-container'>
//         {
//         listOfRestaurants.map((restaurant) => (
//         <RestaurantCard key={restaurant.id} resData={restaurant}/>
//         ))}
//         </div>
//         </>
        
        
//     )
// };

// export default Body;


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  
    // Function to handle search
    const handleSearch = (searchText) => {
      const filteredList = resList.filter(
        (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setListOfRestaurants(filteredList);
      setFilteredRestaurant(filteredList);
    };
  
    return (
      <>
        <Header onSearch={handleSearch} />
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.data.rating > 4
            );
            setListOfRestaurants(filteredList);
          }}>
            Top Rated Restaurant
          </button>
        </div>
        <div className='res-container'>
          {
            listOfRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} resData={restaurant} />
            ))
          }
        </div>
      </>
    );
  };
  
  export default Body;