import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { comprobarDatos } from '../funJS/comprobarDatos';


export const BtnRealizarCompra = () => {

    const { cliente } = useContext(Context);

    const realizarCompra = () => {
        comprobarDatos(cliente);
        
        if (comprobarDatos(cliente)) {
            
            console.log("afjg")
        }
    }

    return (
        <>

            el btn tiene q guardar las ordenes en firestore
            <button type='button' onClick={realizarCompra}>Confirmar Compra</button>

        </>
    )
}
