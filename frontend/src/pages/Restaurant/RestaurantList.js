import React from "react";
import classes from "./RestaurantList.module.css";

const RestaurantListingPage = () => {
  // Sample array of restaurants
  const restaurants = [
    {
      id: 1,
      name: "Restaurant A",
      rating: 4.5,
      imageUrl: "restaurant_a.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Restaurant B",
      rating: 4.2,
      image: "restaurant_b.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div>
      <h1>Restaurant Listing</h1>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <img src={restaurant.image} alt={restaurant.name} />
          <h2>{restaurant.name}</h2>
          <p>Rating: {restaurant.rating}</p>
          <p>{restaurant.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantListingPage;
