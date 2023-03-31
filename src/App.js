import React from "react";
import { ItemList } from "./components/ItemList";
import { Order } from "./components/Order";

import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { OrderList } from "./components/OrderList";

export const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orderList" element={<OrderList />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};
