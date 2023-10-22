import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { Formulario } from '../components/Formulario';
import { BtnOpcionesCompra } from '../components/BtnOpcionesCompra';
import { BtnRealizarCompra } from '../components/BtnRealizarCompra';

export const Checkout = () => {
    const { cart, precioTotal, isLogin } = useContext(Context);


    if (cart["productos"].length === 0) {
        return <h1>El carrito esta vacio</h1>
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='container-fluid'>
                    <div>
                        Resumen de compra
                    </div>
                    aca capaz un contenedor con grid
                    <div className='container-fluid'>
                        <div className='resumenContainer'>
                            <ul className='ulResumenCompra'>
                                <li>
                                    Producto
                                </li>
                                <li>
                                    Cantidad
                                </li>
                                <li>
                                    Precio Unitario
                                </li>
                                <li>
                                    Precio Total
                                </li>
                            </ul>
                            <ul className='ulResumenCompra'>
                                <li>Yuna</li>
                                <li>2</li>
                                <li>$50</li>
                                <li>100</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {!isLogin ? <div className='container-fluid'>
                    <div className='container-fluid'>
                        <Formulario />
                    </div>
                </div> : ""}
                <div className='container-fluid'>
                    <BtnOpcionesCompra opcion={"Reset"} />
                    <BtnRealizarCompra />
                </div>
            </div>
        </>

    )
}
