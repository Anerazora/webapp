import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    <nav>
      <Link to={"/"} style={navStyles}>
        <h2>Store</h2>
      </Link>
      <ul className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          <li>
            Cart items: <span className="cart-count">0</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};