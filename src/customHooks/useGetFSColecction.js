import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const useGetFSC = (coleccion) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {

        const db = getFirestore();

        const todasLasColecciones = collection(db, coleccion);
        getDocs(todasLasColecciones)
            .then(snapshot => {

                if (!snapshot.empty) {

                    const { docs } = snapshot;

                    const aux = []
                    docs.forEach(producto => {
                        aux.push(producto.data())
                    })

                    aux.sort((a, b) => a.id - b.id)

                    setProductos([...aux])

                }

            })


    }, [])


    return { productos };
}