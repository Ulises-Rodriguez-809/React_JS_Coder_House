import React, { useContext } from 'react'
import { Context } from '../context/Context';

export const BtnAñadir = ({ nombre, precio, cantidad }) => {

    const { setPrecioTotal, cart, setCart, calcularPrecioTotal } = useContext(Context);
    
    const añadir = () => {
        
        const { productos } = cart;
        let auxPrecio = 0;
        const indexProducto = cart["productos"].findIndex((producto) => producto.name === nombre);

        if (cantidad > 0) {

            if (indexProducto > -1) {
                productos[indexProducto].cantidad += cantidad;

            } else {

                const producto = {
                    id: cart["productos"].length,
                    name: nombre,
                    cantidad,
                    precio
                }

                productos.push(producto);

            }

            auxPrecio = calcularPrecioTotal();

            setPrecioTotal(auxPrecio);

            setCart({
                ...cart,
                productos
            })
        }
    }

    return <button type="button" onClick={añadir}>Añadir</button>
}
