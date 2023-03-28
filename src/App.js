import React from "react";
import { ItemList } from "./components/ItemList";

import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart";

export const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemList />}/>
          <Route path="/cart" element={<ShoppingCart />}/>
        </Routes>

      </Router>
    </div>
  );
};
