import React from "react";
import dataRestaurant from "../../../api/restaurant";
import Restaurant from "./Restaurant";
import "./restaurant.scss";
function RestaurantList() {
  return (
    <div className="restaurant-list">
      {dataRestaurant.map((restaurant, index) => (
        <Restaurant key={index} dataRestaurant={restaurant} />
      ))}
    </div>
  );
}
export default RestaurantList;
