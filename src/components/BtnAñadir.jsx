import React, { useContext } from 'react'
import { Context } from '../context/Context';

export const BtnAñadir = ({ nombre, precio, cantidad }) => {

    const { cartArr, setCartArr, setPrecioTotal, setProductos } = useContext(Context);

    const comprar = () => {

        if (cantidad > 0) {
            alert("El producto se añadio con exito !!!");

            const producto = {
                id: cartArr.length,
                name: nombre,
                cantidad
            }

            setCartArr([
                ...cartArr,
                producto
            ]);

            setPrecioTotal(prevTotal => (prevTotal + precio) * cantidad);

            setProductos(prevTotal => prevTotal + cantidad);
        }
    }

    return <button type="button" onClick={comprar}>Añadir</button>
}
