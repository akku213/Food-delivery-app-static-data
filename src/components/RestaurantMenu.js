import React from 'react';
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API, ITEM_URL  } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RestaurantMenu = () => {

    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=> {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
    
    const json= await data.json();
    // console.log(json);
    setResInfo(json.data);
    };

    if(resInfo==null) return <Shimmer />;

    const{name, cuisines, costForTwoMessage, areaName,sla: { lastMileTravelString }, avgRatingString, totalRatingsString} = resInfo?.cards[0]?.card?.card?.info;
    const{itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const{categories} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    console.log('categories:', categories);

  return (
    <div className='menu'>
        <div className='menu-details'>
            <h1>{name}</h1>
            <div className='f-1'>
            <div className='p-1'>
                <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
                <p>{areaName}, {lastMileTravelString}</p>
            </div>
            <div className='f-1-2'>
                <FontAwesomeIcon icon={faStar} className='icon-star' />
                <span className='RestaurantRatings_avgRating'>{avgRatingString}</span><br></br>
                <span className='RestaurantRatings_Rating'>{totalRatingsString}</span>
            </div>
            </div>
            <div className='RestaurantHeader_dottedSeparator'></div>

            <h4>Meals</h4>
           
            <ul>
                {itemCards?.map(item => (
                    <li key={item?.card?.info?.id}>
                        <div className='i-1'>
                            <div>
                            <span>{item?.card?.info?.name} </span><br></br>
                            <span>{"Rs."}{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>
                            </div>
                            <div>
                            <img
                                className='item-logo'
                                alt='item-logo'
                                src={ITEM_URL + item?.card?.info?.imageId}
                            />
                            </div>
                        </div>
                        <div className='line'></div>
                    </li>
                )) || categories?.map((category, categoryIndex) => (
                    <div key={`category_${categoryIndex}`}>
                        <h3>{category.id}</h3>
                        {category.itemCards?.map((item, itemIndex) => (
                            <li key={`item_${categoryIndex}_${itemIndex}`}>
                                <div className='i-1'>
                                    <div>
                                    <span>{item.card?.info?.name}</span><br></br>
                                    <span>{"Rs."}{item.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>
                                    </div>
                                    <div>
                                    <img
                                        className='item-logo'
                                        alt='item-logo'
                                        src={ITEM_URL + item?.card?.info?.imageId}
                                    />
                                    </div>
                                </div>
                                <div className='line'></div>
                            </li>
                        ))}
                    </div>
                ))}
            </ul>

        </div>
    </div>
  )
}

export default RestaurantMenu;