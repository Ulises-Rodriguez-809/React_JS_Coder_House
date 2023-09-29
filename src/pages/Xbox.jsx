import React, { useEffect, useState } from 'react'
import { loadingFun } from '../funJS/asyncMocks';
import useFetch from '../customHooks/useFetch';
import { Item } from '../components/Item';

export const Xbox = () => {
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
