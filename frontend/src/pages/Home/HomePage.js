import React from "react";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Food Ordering Website</h1>
      <p>Order delicious food from your favorite restaurants!</p>
      <button className="btn btn-primary">Sign in</button>
      <button className="btn btn-primary">Login</button>
    </div>
  );
};

export default HomePage;
