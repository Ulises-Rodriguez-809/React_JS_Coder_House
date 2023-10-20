import React, { useContext } from 'react'
import { Context } from '../context/Context'


const comprobarCampos = (e)=>{

    e.preventDefault();

}

export const BtnRealizarCompra = () => {

    const { cart } = useContext(Context);

    return (
        <>
            
            // aca la logia de firestore para q se guarden las ordenes
            <div>BtnRealizarCompra</div>
            <button type='submit' onSubmit={comprobarCampos}>Confirmar Compra</button>
        </>
    )
}
