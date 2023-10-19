import React, { useEffect, useState } from 'react'
import { loadingFun } from '../funJS/asyncMocks';
import { Item } from '../components/Item';
import { ItemListContainer } from '../components/ItemListContainer';
import { Loading } from '../components/Loading';
import { useGetFSC } from '../customHooks/useGetFSColecction';

export const Home = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadingFun()
            .then(cargando => setLoading(cargando))
    }, [])

    const {productos} = useGetFSC("juegosRetro");

    return (
        <>
            {loading ? <div>
                <ItemListContainer mensaje="Bienvenido a la tienda!!!" />
                <div className='divUlCardsContainer'>
                    <ul className='ulCards'>
                        {productos.map((producto) => <Item
                            key={producto.id}
                            url={`${producto.id}`}
                            titulo={producto.name}
                            descripcion={producto.descripcion}
                            precio={producto.precio}
                            stock={producto.stock}>
                            <img className='imgProductos' src={producto.url} alt={producto.name} />
                        </Item>)}
                    </ul>
                </div>
            </div> : <Loading />}
        </>
    )
}
