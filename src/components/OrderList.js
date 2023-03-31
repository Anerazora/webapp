import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const OrderList = ({ name, totalPrice, id, quantity }) => {
    const [cart, setCart] = useContext(CartContext);
  
    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(id);

    return (
        <div className="item-box-orders">
            {quantityPerItem > 0 && (
                <div className="item-quantity">{quantityPerItem}</div>
            )}

            <div>Pedido: {id} Nombre: {name} Cantidad: {quantity} Precio total: {totalPrice} €</div>

            
        </div>
        
        
    );
}