import React, { useEffect, useState } from 'react'
import { loadingFun } from '../funJS/asyncMocks';
import useFetch from '../customHooks/useFetch';
import { Item } from '../components/Item';
import { ItemListContainer } from '../components/ItemListContainer';
import { Loading } from '../components/Loading';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore';

export const Home = ({ url }) => {
    const { productos } = useFetch(url);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadingFun()
            .then(cargando => setLoading(cargando))
    }, [])

   


    //><
    useEffect(() => {
        const db = getFirestore();

        const juegosRetro = doc(db, "Items", "VWPtEj6KWDHH84wZVFA8");

        //este para traer una sola coleccion
        getDoc(juegosRetro)
            .then(snapshot => {
                if (snapshot.exists()) {
                    console.log(snapshot)
                }
            })

        //trae todas las colecciones
        const todasLasColecciones = collection(db, "Items");
        getDocs(todasLasColecciones)
            .then(snapshot => {
                console.log(snapshot)
            })

    }, []);

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
