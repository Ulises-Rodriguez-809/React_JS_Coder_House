import React, { useEffect } from 'react'
import useFetch from '../customHooks/useFetch';
import { Item } from '../components/Item';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export const Figuras = () => {


    
    const { productos } = useFetch('./figuras/figuras.json');

    return (
        <>
            <div className='divUlCardsContainer'>
                <ul className='ulCards'>
                    {productos && productos.map((figura) => <Item 
                    key={figura.id} 
                    url={`figuras/${figura.id}`}
                    titulo={figura.name} 
                    descripcion={figura.descripcion} 
                    precio={figura.precio}
                    style={{width : "18rem",height : "510px"}}
                    stock={figura.stock}>
                        <img className='imgProductos' src={figura.url} alt={figura.name} />
                    </Item>)}
                </ul>
            </div>
        </>
    )
}
