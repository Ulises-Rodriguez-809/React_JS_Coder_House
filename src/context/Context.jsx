import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const Context = createContext();

export const ContextWrapper = ({ children }) => {
    // card
    const [cart, setCart] = useState({
        cliente: {
            name: "juan",
            cell: 5555555,
            email: "juan@gmail.com",
            email2: "juan@gmail.com"
        },
        productos: []
    })
    const [precioTotal,setPrecioTotal] = useState(0);

    const calcularPrecioTotal = () => {
        const { productos } = cart;
        return productos.reduce((acumulador, producto) => acumulador + producto.cantidad * producto.precio, 0);
    };

    const objetoProps = {
        precioTotal,
        setPrecioTotal,
        cart,
        setCart,
        calcularPrecioTotal
    }

    return (
        // <Context.Provider value={{cartArr,setCartArr,total,setTotal}}>
        <Context.Provider value={{ ...objetoProps }}>
            {children}
        </Context.Provider>
    )
}

