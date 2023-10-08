import React from 'react'
import { ItemDetalle } from './ItemDetalle';
import { useParams } from 'react-router-dom';

export const ComporbarCategoria = ({ producto }) => {
    const { consola, juego } = useParams();

    if (Object.keys(useParams()).length === 1) {

        return <>
            <div>
                <ItemDetalle producto={producto}>
                    <img className='imgProductosDetalle' src={producto.url} alt={producto.name} />
                </ItemDetalle>
            </div>
        </>

    }
    else if (consola) {
        const aux = producto.consolas.find(producto => producto.id.toString() === consola);

        return <>
            <div >
                <ItemDetalle producto={aux}>
                    <img className='imgProductosDetalle' src={aux.url} alt={aux.name} />
                </ItemDetalle>
            </div>
        </>
    }
    else {
        const aux = producto.juegos.find(producto => producto.id.toString() === juego);

        return <>
            <div >
                <ItemDetalle
                    producto={aux}>
                    <img className='imgProductosDetalle'
                        src={aux.url}
                        alt={aux.name} />
                </ItemDetalle>
            </div>
        </>
    }

}
