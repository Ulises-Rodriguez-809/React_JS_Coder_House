import React from 'react'
import { Productos } from './Productos';

export const Juegos = ({url}) => {

    // const { productos } = useFetch('./juegos/juegos.json');
        // <section>
        //     <ul>
        //         {productos.map((producto) => <li key={producto.id}>
        //             <Link to={`/juegos/${producto.id}`}>{producto.id}</Link>
        //         </li>)}
        //     </ul>
        // </section>

    const productoCategoria = url.substring(2,8);

    
    return <Productos url={url} productoCategoria={productoCategoria}/>
}
