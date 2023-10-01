import React from 'react'
import { Productos } from './Productos';

export const Juegos = ({url}) => {

    const productoCategoria = url.substring(2,8);
    
    return <Productos url={url} productoCategoria={productoCategoria}/>
}
