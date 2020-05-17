import React from "react";
import { Link } from "react-router-dom";
export default function Restaurant(props) {
  const { dataRestaurant } = props;
  return (
    <Link className="restaurant" to="/restaurant-description">
      <img src={dataRestaurant.imageSrc} />
      <h2>{dataRestaurant.name}</h2>
      <div className="info-restaurant">
        <section>
          <span>{dataRestaurant.address}</span>
          <span>{dataRestaurant.country}</span>
          <span>
            {dataRestaurant.state} {dataRestaurant.zipCode}
          </span>
        </section>
        <section>
          <span className="bold-info">{dataRestaurant.category}</span>
          <span className="bold-info">{dataRestaurant.rating} estrellas</span>
          <span>{dataRestaurant.reviewCount} comentarios</span>
        </section>
      </div>
    </Link>
  );
}
