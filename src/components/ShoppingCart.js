import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <div className="cart-container">
      <div>
        <h1>Resumen Cesta</h1>
        <div>Productos en la cesta: {quantity}</div>
        <div>Precio total: {totalPrice} €</div>
        {/* <button onClick={() => console.log(cart)}>REALIZAR PEDIDO</button> */}
        <div><Link to="/order"><button>REALIZAR PEDIDO</button></Link></div>
      </div>
    </div>
  );
};