import React from "react";

export const Item = ({ name, price, id, imgUrl }) => {
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