import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const Context = createContext();

export const ContextWrapper = ({children})=>{
    // card
    const [cartArr, setCartArr] = useState([]);
    const [productos,setProductos] = useState(0);
    const [precioTotal,setPrecioTotal] = useState(0);

    const objetoProps = {
        cartArr,
        setCartArr,
        productos,
        setProductos,
        precioTotal,
        setPrecioTotal
    }

    return(
        // <Context.Provider value={{cartArr,setCartArr,total,setTotal}}>
        <Context.Provider value={{...objetoProps}}>
            {children}
        </Context.Provider>
    )
}

