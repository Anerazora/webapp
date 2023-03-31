import React from "react";
import { OrderList } from "./OrderList";
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Order = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      axios.get('https://webapp-96011-default-rtdb.europe-west1.firebasedatabase.app/orders.json')
          .then((response) => {
              let arrayProducts = [];
              for (let key in response.data) {
                  arrayProducts.push({
                      id: key,
                    name: response.data[key].name,
                    totalPrice: response.data[key].totalPrice,
                      //imgUrl: response.data[key].imgUrl
                      quantity: response.data[key].quantity
                  })
              }
              
              setProducts(arrayProducts);
          }).catch((error)=>{
              alert('Se ha producido un error');
          })
  },[]);

  return (
    <div className="items-list">
      {products.map((product, idx) => {
        return <OrderList key={product.id} {...product} />;
      })}
    </div>
  );
};