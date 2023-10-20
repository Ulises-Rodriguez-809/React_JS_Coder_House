import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { Formulario } from '../components/Formulario';
import { BtnOpcionesCompra } from '../components/BtnOpcionesCompra';
import { BtnRealizarCompra } from '../components/BtnRealizarCompra';

export const Checkout = () => {
    const { cart, precioTotal, isLogin } = useContext(Context);

    return (
        <>
            <div className='container-fluid'>
                <div className='container-fluid'>
                    Resumen de compra
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
