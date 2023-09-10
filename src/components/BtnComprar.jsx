import React from 'react'

export const BtnComprar = () => {

    const comprar = () => {
        alert("Tu compra se realiza con exito !!!");
    }
    
    return <button type="button" onClick={comprar}>Comprar</button>
}
