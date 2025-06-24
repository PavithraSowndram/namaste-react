import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;

  const [foodImg, setFoodImage] = useState("");

  const fetchRandomImage = async () => {
    const response = await fetch("https://foodish-api.com/api/");
    const data = await response.json();
    setFoodImage(data.image);
    console.log(data.image);
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <div className="res-card">
      <img className="res-logo" src={foodImg} alt={name} />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.sla.deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
