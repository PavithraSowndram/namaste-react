import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer";
import { RESTAURANT_API, proxyUrl, swiggyUrl } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    );
    const json = await data.json();
    const resListItems =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
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
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
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
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredRestaurants(filteredlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
