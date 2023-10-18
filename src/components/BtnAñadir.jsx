import React, { useContext } from 'react'
import { Context } from '../context/Context';

export const BtnAñadir = ({ nombre, precio, cantidad }) => {

    const { cartArr, setCartArr, setPrecioTotal, setProductos } = useContext(Context);

    const comprar = () => {

        const indexProducto = cartArr.findIndex((producto) => producto.name === nombre);
        console.log(indexProducto)

        if (cantidad > 0) {


            if (indexProducto > -1) {
                cartArr[indexProducto].cantidad += cantidad;

            }else{
                const producto = {
                    id: cartArr.length,
                    name: nombre,
                    cantidad
                }
    
                setCartArr([
                    ...cartArr,
                    producto
                ]);

            }
            

            setPrecioTotal(prevTotal => (prevTotal + precio) * cantidad);

            setProductos(prevTotal => prevTotal + cantidad);
        }
    }

    return <button type="button" onClick={comprar}>Añadir</button>
}
