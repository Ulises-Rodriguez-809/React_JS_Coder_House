import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../customHooks/useFetch'

export const Productos = ({ url,productoCategoria }) => {
    const { productos } = useFetch(url);

    return (
        <section>
            <ul className='ulLinkProductos'>
                {productos.map((producto) => <li key={producto.id}>
                    <Link className='linkProductos' to={`/${productoCategoria}/${producto.id}`}>{producto.id}</Link>
                </li>)}
            </ul>
        </section>
    )
}
