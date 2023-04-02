import React from 'react';
import { Link } from 'react-router-dom';

class Thanks extends React.Component {

    render() {

        return (
            <>
                <h2>Pedido realizado</h2>
                <div id="" className="ancho mx-auto">
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                      En unos días recibirá su pedido <br/>
                    </div>
                    <div>
                        <div><Link to="/"><button>REALIZAR NUEVO PEDIDO</button></Link></div>
                    </div>
                </div>
            </>
        )
    }
}

export default Thanks;