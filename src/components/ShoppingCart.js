import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";
import axios from 'axios';

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  const list = cart.reduce((acc, curr) => {
    return acc + curr.list;
  }, 0);

  const order = {
    list: list,
    quantity: quantity,
    totalPrice: totalPrice
  }

  

function AddOrder(){

  if (totalPrice > 0) {

    axios.post('https://webapp-96011-default-rtdb.europe-west1.firebasedatabase.app/orders.json', order)
      .then((response) => {
        alert('El pedido se ha realizado');
      })
  }

}
 
  return (
    <div className="cart-container">
      <div>
        <h1>Resumen Cesta</h1>
        <div>Prueba: {list}</div>
        <div>Productos en la cesta: {quantity}</div>
        <div>Precio total: {totalPrice} €</div>
        {/* <button onClick={() => console.log(cart)}>REALIZAR PEDIDO</button> */}
        <div><Link to="/order"><button onClick={AddOrder}>REALIZAR PEDIDO</button></Link></div>
      </div>
    </div>
  );
};