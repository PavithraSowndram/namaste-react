import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer";
import { resList } from "../utils/mockdata";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("use effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9334721&lng=80.2181014&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=13.061197&lng=80.213105&str=near%20me&trackingId=null&submitAction=ENTER&queryUniqueId=6052014c-d4b5-f5b3-a553-3095e9f15d64"
    );
    const resJson = await data.json();
    const resListItems =
      resJson.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards;
    setListOfRestaurants(resListItems);
    setFilteredRestaurants(resListItems);
  };

  return listOfRestaurants?.length < 1 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter-container">
        <div className="search-container">
          <input
            className="search-box"
            value={searchText}
            onChange={(eve) => {
              setSearchText(eve.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchedItems = listOfRestaurants.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(searchedItems);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listOfRestaurants.filter(
              (restaurant) => restaurant.card.card.info.avgRating
            );
            setListOfRestaurants(filteredlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant.card.card.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
