import React from 'react'
import { useParams } from 'react-router-dom'
import { obtenerProducto } from '../funJS/obtenerProducto';
import { ComporbarCategoria } from '../components/ComprobarCategoria';
import { useGetFSC } from '../customHooks/useGetFSColecction';

export const DetalleProducto = ({ url }) => {

    const { id } = useParams();

    const {productos} = useGetFSC(url);

    const producto = obtenerProducto(id,productos);

    return (
        <>
            {producto && <ComporbarCategoria producto={producto} />}
        </>
    )
}
