import React, { useEffect, useState } from 'react';
import { Item } from './Item';

export const ItemListContainer = ({ mensaje }) => {

    const [lista,setLista] = useState([]);

    const topProductosFetch = async ()=>{
        const res = await fetch('./t10Productos/t10P.json');
        const data = await res.json();

        setLista([...data]);
    }

    useEffect(() => {
        topProductosFetch();
    }, [])


    return (
        <>
            <div className='msgContainer'>
                <p className='msg'>{mensaje}</p>
            </div>
            <div className='divUlCardsContainer'>
                <ul className='ulCards'>
                    {lista.map((producto)=> <Item key={producto.id} titulo={producto.nombre} descripcion={producto.descripcion} precio={producto.precio}>
                        <img className='imgProductos' src={producto.url} alt={producto.nombre} />
                    </Item>)}
                </ul>
            </div>
        </>
    )
}
