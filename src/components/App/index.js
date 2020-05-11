import React from "react";
import Header from "../Header";
import SearchBar from "../SearchBar";
import RestaurantList from "../Restaurants/RestaurantList";
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SearchBar />
        <RestaurantList />
      </>
    );
  }
}

export default App;
