import React from "react";
import { ItemList } from "./components/ItemList";
import { Order } from "./components/Order";
import { ConfirmOrder } from "./components/ConfirmOrder";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { OrderList } from "./components/OrderList";
import { FormClient } from "./components/FormClient";
import Thanks from "./components/Thanks";


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
          <Route path="/confirmOrder" element={<ConfirmOrder />} />
          <Route path="/formClient" element={<FormClient />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};
