import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../customHooks/useFetch'

export const Productos = ({ url, productoCategoria, array = null }) => {
    
    const { productos } = useFetch(url);
    return (
        <section>
            <ul className='ulLinkProductos'>
                {productos.map((producto, index) => <li key={producto.id}>
                    <Link className='linkProductos' to={`/${productoCategoria}/${producto.id}`}>
                        <div className='divLinkInfoContainer'>
                            <div>
                                {producto.id}
                            </div>
                            {(array) && <div>
                                <img className='imgLink' src={array[index]} alt={producto.id} />
                            </div>}
                        </div>
                    </Link>
                </li>)}
            </ul>
        </section>
    )
}
