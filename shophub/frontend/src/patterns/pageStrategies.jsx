import React from "react";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import CartPage from "../pages/CartPage.jsx";
import CheckoutPage from "../pages/CheckoutPage.jsx";
import OrdersPage from "../pages/OrdersPage.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";

export const pageStrategies = {
  login: (props) => <LoginPage {...props} />,
  register: (props) => <RegisterPage {...props} />,
  home: (props) => <HomePage {...props} />,
  cart: (props) => <CartPage {...props} />,
  checkout: (props) => <CheckoutPage {...props} />,
  orders: (props) => <OrdersPage {...props} />,
  profile: (props) => <ProfilePage {...props} />,
};
