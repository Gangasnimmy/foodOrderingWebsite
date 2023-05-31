import React, { useState } from "react";

export default function UserLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here (e.g., API call)
    if (username === "admin@gmail.com" && password === "password") {
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
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            id="user"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}
