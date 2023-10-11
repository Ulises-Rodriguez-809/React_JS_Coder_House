import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Precio = () => {
    const {precioTotal} = useContext(Context);

    return <li>Total: ${Math.round(precioTotal * 100) / 100}</li>
}
