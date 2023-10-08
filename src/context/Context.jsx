import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const Context = createContext();

export const ContextWrapper = ({children})=>{
    // detalle
    
    
    // card
    const [cartArr, setCartArr] = useState([]);
    const [total,setTotal] = useState(0);

    const objetoProps = {
        cartArr,
        setCartArr,
        total,
        setTotal
    }

    return(
        // <Context.Provider value={{cartArr,setCartArr,total,setTotal}}>
        <Context.Provider value={{...objetoProps}}>
            {children}
        </Context.Provider>
    )
}

