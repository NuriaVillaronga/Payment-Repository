import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from '../imagen.jpg';
import { Badge } from 'react-bootstrap';

function Producto() { 

    return (<div className="row row-producto-pedido">
                <div className="col-4 col-imagen-pedido ">
                    <img src={imagen} className="producto-comprado"></img> 
                    <Badge pill bg="dark">1</Badge>
                </div>
                <div className="col-6 col-titulo ">CAMISETA NEGRA DE ALGODÓN</div>
                <div className="col-2 col-precio ">
                    <div className='texto-precio-rebajado'>4300€</div>
                    <div className='texto-precio'>120€</div>
                </div>
            </div>);  
};


export default Producto;