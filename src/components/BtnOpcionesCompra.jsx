import React, { useContext } from 'react'
import { Context } from '../context/Context';

export const BtnOpcionesCompra = ({opcion}) => {

    const {setCartArr,setProductos,setPrecioTotal} = useContext(Context);

    const opciones = (e)=>{
        const {target} = e;
        const {value} = target;

        if (value === "Reset") {
            setCartArr([]);
            setProductos(0);
            setPrecioTotal(0);
        }
        else{
            alert("Tus productos fueron comprados con exito");
        }
    }


    return (
        <button onClick={opciones} value={opcion}>{opcion}</button>
    )
}
