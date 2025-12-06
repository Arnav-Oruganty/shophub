import React from "react";
import { useShop } from "./context/ShopContext";
import Navbar from "./components/Navbar";
import { pageStrategies } from "./patterns/pageStrategies";

export default function App() {
  const { isAuthenticated, currentPage } = useShop();

  const PageComponent = pageStrategies[currentPage];

  return (
    <div className="min-h-screen bg-gray-50">
      {isAuthenticated && <Navbar />}
      {PageComponent ? (
        <PageComponent />
      ) : (
        <div className="p-8">Unknown page: {currentPage}</div>
      )}
    </div>
  );
}
