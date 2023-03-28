import React from "react";
import { ItemList } from "./components/ItemList";

import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <div>
      <Navbar />
      <ItemList />
    </div>
  );
};
