import React, { useEffect, useState } from 'react'
import { loadingFun } from '../funJS/asyncMocks';
import useFetch from '../customHooks/useFetch';
import { Item } from '../components/Item';
import { ItemListContainer } from '../components/ItemListContainer';
import { Loading } from '../components/Loading';

export const Home = ({ url }) => {
    const { productos } = useFetch(url);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadingFun()
            .then(cargando => setLoading(cargando))
    }, [])

    // if (!loading) {
    //     return <h1 className='cargandoTitulo'>Cargando los productos</h1>
    // }

    return (
        <>
            {loading ? <div>
                <ItemListContainer mensaje="Bienvenido a la tienda!!!" />
                <div className='divUlCardsContainer'>
                    <ul className='ulCards'>
                        {productos.map((producto) => <Item
                            key={producto.id}
                            url={`${producto.id}`}
                            titulo={producto.nombre}
                            descripcion={producto.descripcion}
                            precio={producto.precio}
                            stock={producto.stock}>
                            <img className='imgProductos' src={producto.url} alt={producto.nombre} />
                        </Item>)}
                    </ul>
                </div>
            </div> : <Loading />}
        </>
    )
}
