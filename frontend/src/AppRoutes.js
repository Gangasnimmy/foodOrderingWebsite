import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SignupPage from "./pages/Signup/Signup";
import LoginPage from "./pages/Login/loginPage";
import UserMenu from "./pages/User/UserMenu";
import RestaurantListingPage from "./pages/Restaurant/RestaurantList";
import OrderSummaryPage from "./pages/User/Orders";
import CheckoutPage from "./pages/User/checkOut";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/menu" element={<UserMenu />} />
      <Route path="/restaurantList" element={<RestaurantListingPage />} />
      <Route path="/orders" element={<OrderSummaryPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}
