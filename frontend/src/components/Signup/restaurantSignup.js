import React, { useState } from "react";

export default function RSignupForm() {
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");

  const handleRestaurantNameChange = (e) => {
    setRestaurantName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleOpeningTimeChange = (e) => {
    setOpeningTime(e.target.value);
  };

  const handleClosingTimeChange = (e) => {
    setClosingTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform signup logic here (e.g., API call)

    // Reset the form
    setRestaurantName("");
    setAddress("");
    setOpeningTime("");
    setClosingTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div>
        <label htmlFor="restaurantName">Restaurant Name:</label>
        <input
          type="text"
          id="restaurantName"
          value={restaurantName}
          onChange={handleRestaurantNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
          required
        />
      </div>
      <div>
        <label htmlFor="openingTime">Opening Time:</label>
        <input
          type="text"
          id="openingTime"
          value={openingTime}
          onChange={handleOpeningTimeChange}
          required
        />
      </div>
      <div>
        <label htmlFor="closingTime">Closing Time:</label>
        <input
          type="text"
          id="closingTime"
          value={closingTime}
          onChange={handleClosingTimeChange}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}
