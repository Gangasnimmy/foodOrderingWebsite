import React, { useState } from "react";
import classes from "./Signup.module.css";
import USignUpForm from "../../components/Signup/userSignup";
import RSignupForm from "../../components/Signup/restaurantSignup";

const SignupPage = () => {
  const [userType, setUserType] = useState("");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const renderSignupForm = () => {
    if (userType === "user") {
      return <USignUpForm />;
    } else if (userType === "restaurant") {
      return <RSignupForm />;
    } else {
      return null;
    }
  };

  return (
    <div className={classes.signup}>
      <h2>Signup Page</h2>
      <div>
        <label>
          Signup as:
          <select value={userType} onChange={handleUserTypeChange}>
            <option value="">Select</option>
            <option value="user">User</option>
            <option value="restaurant">Restaurant</option>
          </select>
        </label>
      </div>
      {renderSignupForm()}
    </div>
  );
};

export default SignupPage;
