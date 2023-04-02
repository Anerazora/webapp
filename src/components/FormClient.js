import React, {Fragment, useState, useContext} from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";
import axios from 'axios';


export const FormClient = () => {

    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  
    const totalPrice = cart.reduce(
      (acc, curr) => acc + curr.quantity * curr.price,
      0
    );
    
    const name = cart.reduce((acc, curr) => {
      return acc + curr.name;
    }, ' ');

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        mail: '',
        dni: '',
        direccionEnvio: ''
    })
 
    const order = {
      name: name,
      quantity: quantity,
      totalPrice: totalPrice,
      datos: datos.nombre +' '+ datos.apellido,
      datosMail: datos.mail,
      datosDni: datos.dni,
      datosDireccionEnvio: datos.direccionEnvio
    }

    

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
       
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido + datos.mail + datos.dni + datos.direccionEnvio)
    }

   
  
  function AddOrder() {

    if (totalPrice > 0) {

      axios.post('https://webapp-96011-default-rtdb.europe-west1.firebasedatabase.app/orders.json', order )
        .then((response) => {
           alert('El pedido se ha realizado');
        })
        
     }

   }

    return (
        <Fragment>
            <div className="cart-container">
            
            <form className ="row" onSubmit={enviarDatos}> 
            <h1>Formulario</h1>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Mail" className="form-control" onChange={handleInputChange} name="mail"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="DNI" className="form-control" onChange={handleInputChange} name="dni"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Direccion de envio" className="form-control" onChange={handleInputChange} name="direccionEnvio"></input>
                </div>
                <Link to="/thanks "><button className="item-add-button" onClick={AddOrder}>CONTINUAR</button></Link>

                {/* <div><Link to="/order"><button onClick={AddOrder}>CONTINUAR</button></Link></div> */}
            </form>
            </div>
            {/* <ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
            </ul> */}
        </Fragment>
    );
}
 
