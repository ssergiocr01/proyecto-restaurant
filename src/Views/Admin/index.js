import React from "react";
import "./index.scss";
import RestaurantList from "../../components/Admin/Restaurant/RestaurantList";
import ModalAddrestaurant from "../../components/Admin/Restaurant/ModalAddRestaurant";
class IndexView extends React.Component {
  render() {
    return (
      <section className="restaurant-container">
        <ModalAddrestaurant />
        <RestaurantList />
      </section>
    );
  }
}

export default IndexView;
