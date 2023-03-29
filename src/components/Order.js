import React from "react";
import { Item } from "./Item";
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Order = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      axios.get('https://webapp-96011-default-rtdb.europe-west1.firebasedatabase.app/products.json')
          .then((response) => {
              let arrayProducts = [];
              for (let key in response.data) {
                  arrayProducts.push({
                      id: key,
                    //   name: response.data[key].name,
                    //   price: response.data[key].price,
                      imgUrl: response.data[key].imgUrl
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
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
};