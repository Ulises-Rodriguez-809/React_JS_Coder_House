import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../customHooks/useFetch';
import { ComporbarCategoria } from '../components/ComporbarCategoria';
import { obtenerProducto } from '../funJS/obtenerProducto';

export const DetalleProducto = ({ url }) => {

    const { id } = useParams();
    const paramsLength = Object.keys(useParams()).length === 1;

    const { productos } = useFetch(url);

    const producto = obtenerProducto(id,productos,paramsLength);

    return (
        <>
            {producto && <ComporbarCategoria producto={producto} />}
            {/* {Object.keys(useParams()).length === 1 ? <div>
                {producto && <ItemDetalle producto={producto}>
                    <img className='imgProductosDetalle' src={producto.url} alt={producto.name} />
                </ItemDetalle>}
            </div> : <div >
                {producto && <ItemDetalle producto={producto.consolas.find(producto => producto.id.toString() === consola)}>
                    <img className='imgProductosDetalle' src={producto.consolas.find(producto => producto.id.toString() === consola).url} alt={producto.consolas.find(producto => producto.id.toString() === consola).name} />
                </ItemDetalle>}
            </div>} */}
        </>
    )
}
