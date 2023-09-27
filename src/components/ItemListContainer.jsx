import React, { useEffect, useState } from 'react';
import { Item } from './Item';
import useFetch from '../customHooks/useFetch';
import { loadingFun } from '../funJS/asyncMocks';

export const ItemListContainer = ({ mensaje }) => {

    const { productos } = useFetch('./t10Productos/t10P.json');

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        loadingFun()
            .then(cargando => setLoading(cargando))
    }, [])


    if (!loading) {
        return <h1 className='cargandoTitulo'>Cargando los productos</h1>
    }

    return (
        <>
            <div className='msgContainer'>
                <p className='msg'>{mensaje}</p>
            </div>
            <div className='divUlCardsContainer'>
                <ul className='ulCards'>
                    {productos.map((producto) => <Item key={producto.id} titulo={producto.nombre} descripcion={producto.descripcion} precio={producto.precio}>
                        <img className='imgProductos' src={producto.url} alt={producto.nombre} />
                    </Item>)}
                </ul>
            </div>
        </>
    )
}
