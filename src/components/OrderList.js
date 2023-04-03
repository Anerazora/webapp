import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Link } from "react-router-dom";
import axios from 'axios';
// import { FormClient } from "./FormClient";
// import { Order } from "./Order";

export const OrderList = ({ name, totalPrice, id, quantity, datos, datosMail, datosDni, datosDireccionEnvio}) => {
    const [cart, setCart] = useContext(CartContext);

    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(id);

    const getDeleteId = (id) => {
        return cart.find((order) => order.id === id)?.id || 0;
    };

    const deleteId = getDeleteId(id);

    const order = {
        id: id,
        name: name,
        quantity: quantity,
        totalPrice: totalPrice,
        datos: datos.nombre +' '+ datos.apellido,
        datosMail: datos.mail,
        datosDni: datos.dni,
        datosDireccionEnvio: datos.direccionEnvio
      }
  
    
    
    function DeleteOrder() {

      axios.delete('https://webapp-96011-default-rtdb.europe-west1.firebasedatabase.app/orders/'+ id + '.json')
        .then((response) => {
           alert('El pedido se ha borrado');
        })
        
 

   }

    return (
        

<div className="cart-container">
    
        <div>
            {quantityPerItem > 0 && (
                <div className="item-quantity">{quantityPerItem}</div>
            )}
            <div>Pedido: {id}<Link to="/detailOrders"><button className="item-add-button">Ver pedido</button></Link><button className="item-delete-button" onClick={DeleteOrder}>Borrar pedido</button></div>
            {/* <div> Pedido: {id}<button onClick={id} >Ver pedido</button></div> */}
            <div> Datos: {datos}</div>
            <div> Mail: {datosMail}</div>
            <div> DNI: {datosDni}</div>
            <div> Dirección de envio: {datosDireccionEnvio}</div>
            <div> Nombre: {name}</div>
            <div> Cantidad: {quantity}</div>
            <div> Precio total: {totalPrice} €</div>


        </div>
</div>

    );
}