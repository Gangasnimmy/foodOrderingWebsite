import React, { useState } from "react";
import UserLoginForm from "../../components/Login/userLogin";
import RestaurantLogin from "../../components/Login/restaurantLogin";
import classes from "./loginPage.module.css";

const LoginPage = () => {
  const [userType, setUserType] = useState("");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleLogin = (e) => {
    // e.preventDefault();

    if (userType === "user") {
      return <UserLoginForm />;
    } else if (userType === "restaurant") {
      return <RestaurantLogin />;
    } else {
      return null;
    }
    // Perform further actions such as redirecting to the appropriate dashboard based on user type
  };

  return (
    <div className={classes.login}>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div className={classes.formGroup}>
          <label>Login as:</label>
          <select value={userType} onChange={handleUserTypeChange}>
            <option value="">Select</option>
            <option value="customer">Customer</option>
            <option value="restaurant">Restaurant</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
