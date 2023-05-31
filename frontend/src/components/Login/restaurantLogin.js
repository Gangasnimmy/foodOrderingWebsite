import React, { useState } from "react";

const RestaurantLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login logic here (e.g., API call)
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
      console.log("Login successful!");
      // Perform further actions upon successful login
    } else {
      console.log("Login failed!");
      // Perform actions for unsuccessful login, such as displaying an error message
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>Welcome, {username}!</h2>
        {/* Render the authenticated content */}
      </div>
    );
  } else {
    return (
      <div>
        <h2>Restaurant Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
};

export default RestaurantLogin;
