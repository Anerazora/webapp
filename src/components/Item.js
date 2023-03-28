import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const Item = ({ name, price, id, imgUrl }) => {
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
        setCart((currItems) => {
          const isItemsFound = currItems.find((item) => item.id === id);
          if (isItemsFound) {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                return item;
              }
            });
          } else {
            return [...currItems, { id, quantity: 1, price }];
          }
        });
      };
      
    return (
        <div className="item-box">
            <div>{name}</div>
            <img src={imgUrl} width="60" height="60" />
            <div className="item-price">${price}</div>
            <button className="item-add-button" onClick={() => addToCart()}>
                + Add to cart
            </button>
        </div>
    );
}