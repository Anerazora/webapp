import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/ShoppingCartContext';

class Thanks extends React.Component {
    

    render() {

        return (
            <>
                
                <div className="cart-container">
                <div id="" className="ancho mx-auto">
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <h2>Pedido realizado</h2>
                      En unos días recibirá su pedido <br/>
                    </div>
                    <div>
                        <div><Link to="/"><button onClick={CartContext}>REALIZAR NUEVO PEDIDO</button></Link></div>
                    </div>
                </div>
                </div>
            </>
        )
    }
}


export default Thanks;