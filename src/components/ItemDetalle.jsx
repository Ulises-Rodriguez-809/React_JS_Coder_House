import React from 'react'
import { Counter } from './Counter'
import { BtnAñadir } from './BtnAñadir';

export const ItemDetalle = ({producto,children}) => {

    const {name,precio,stock,descripcion} = producto;

    return (
        <>
            <div className='productoDetalleContainer'>
                <div>
                    {children}
                </div>
                <div>
                    <p className='tituloProductoDetalle'>nombre: {name}</p>
                    <p>detalles: {descripcion}</p>
                    <p className='precioProductoDetalle'>${precio}</p>
                    <p>stock: {stock}</p>
                    <div>
                        <Counter stock={stock} />
                        <BtnAñadir />
                    </div>
                </div>
            </div>
        </>
    )
}
