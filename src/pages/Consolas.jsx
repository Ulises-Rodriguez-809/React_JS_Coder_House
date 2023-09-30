import React from 'react'
import { Productos } from './Productos';

export const Consolas = ({url}) => {

    // const { productos } = useFetch('./consolas/consolas.json');
//     {/* <section>
//     <ul>
//     {productos.map((producto) => <li key={producto.id}>
//     <Link to={`/consolas/${producto.id}`}>{producto.id}</Link>
//     </li>)}
//     </ul>
// </section> */}
const productoCategoria = url.substring(2,10);
    
    return <Productos url={url} productoCategoria={productoCategoria}/>
}
