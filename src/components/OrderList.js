import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
// import { FormClient } from "./FormClient";
// import { Order } from "./Order";

export const OrderList = ({ name, totalPrice, id, quantity, datos, datosMail, datosDni, datosDireccionEnvio}) => {
    const [cart, setCart] = useContext(CartContext);

    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(id);
    

    return (

<div className="cart-container">
        <div>
            {quantityPerItem > 0 && (
                <div className="item-quantity">{quantityPerItem}</div>
            )}
            
            <div> Pedido: {id}</div>
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