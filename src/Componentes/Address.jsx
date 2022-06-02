import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FloatingLabel, FormControl, FormSelect } from 'react-bootstrap';
import Producto from './Producto';

function Address() { 


    return (<div className="row">
                <div className='col-7'>
                    <form className='row'>
                        <div className="col-3 border"/>
                        <div className="col-9 border col-information">
                            <div className="row">
                                <div className="col-12">LOGO</div>
                            </div>
                            <div className="row">
                                <div className="col-6">INFORMACIÓN DE CONTACTO</div>
                                <div className="col-6">Ya tienes una cuenta? LOGEATE</div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <FloatingLabel label="Email">
                                        <FormControl type="text" placeholder="Email"/>
                                    </FloatingLabel>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 border">
                                    <input type="checkbox"/>texto hgjvgfh jgffhdfmd sfgfhsd fddddddas sasdssss ssssssss ssssss
                                    ssssssss sssssss ssssss ssssss sssssss sssssss ssssss ssssss ssssss ssssssss
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">DIRECCIÓN DE ENVÍO</div>
                            </div>
                            <div className="row row-inputs">
                                <div className="col-12">
                                    <FloatingLabel label="País">
                                        <FormControl type="text" placeholder="País"/> 
                                    </FloatingLabel>
                                </div>
                            </div>
                            <div className="row row-inputs">
                                <div className="col-12 col-lg-6">
                                    <FloatingLabel label="Nombre">
                                        <FormControl type="text" placeholder="Nombre"/>
                                    </FloatingLabel>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <FloatingLabel label="Apellidos">
                                        <FormControl type="text" placeholder="Apellidos"/>
                                    </FloatingLabel>
                                </div>
                            </div>
                            <div className="row row-inputs">
                                <div className="col-12">
                                    <FloatingLabel label="Dirección (Calle y número)"> 
                                        <FormControl type="text" placeholder="Dirección (Calle y número)"/>
                                    </FloatingLabel>
                                </div>
                            </div>
                            <div className="row row-inputs">
                                <div className="col-12">
                                    <FloatingLabel label="Apartamento, suite, etc (opcional)"> 
                                        <FormControl type="text" placeholder="Apartamento, suite, etc (opcional)"/>
                                    </FloatingLabel>
                                </div>
                            </div>
                            <div className="row row-inputs"> 
                                <div className="col-12 col-lg-4">
                                    <FloatingLabel label="Código postal">
                                        <FormControl type="text" placeholder="Código postal"/>
                                    </FloatingLabel>
                                </div>
                                <div className="col-12 col-lg-4" id="city_container"> 
                                    <FloatingLabel controlId="floatingSelect" label="Ciudad">
                                        <FormSelect>
                                            <option value="Vilagarcía de Arousa">Vilagarcía de Arousa</option>
                                            <option value="Vilaxoán">Vilaxoán</option>
                                        </FormSelect> 
                                    </FloatingLabel>
                                </div>
                                <div className="col-12 col-lg-4" id="province_container">  
                                    <FloatingLabel controlId="floatingSelect" label="Provincia">
                                        <FormSelect>
                                            <option value="Pontevedra">Pontevedra</option>
                                            <option value="Ourense">Ourense</option>
                                            <option value="A Coruña">A Coruña</option>
                                            <option value="Lugo">Lugo</option>
                                        </FormSelect>
                                    </FloatingLabel>
                                </div>
                            </div>
                            <div className="row row-inputs"> 
                                <div className="col-12">
                                    <FloatingLabel label="Teléfono">
                                        <FormControl type="text" placeholder="Teléfono"/>
                                    </FloatingLabel>
                                </div>
                            </div>
                            <div className="row"> 
                                <div className="col-12 col-button">
                                    <button type="submit" className='button-pedidos'>TRAMITAR PEDIDO</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-5 border col-payment" border>
                    <div className='row'>
                        <div className='col-11 col-lg-10 col-xl-9 col-xxl-7 border'>
                            <div className="row"> 
                                <div className="col-12 container-productos-payment">
                                    <Producto></Producto>
                                    <Producto></Producto>
                                    <Producto></Producto>
                                    <Producto></Producto>
                                    <Producto></Producto>
                                    <Producto></Producto>
                                </div>
                            </div>
                        </div>
                        <div className='col-1 col-lg-2 col-xl-3 col-xxl-5 border'/>
                    </div>
                </div>
            </div>);  
};


export default Address;
