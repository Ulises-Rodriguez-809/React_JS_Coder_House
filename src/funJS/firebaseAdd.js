import { addDoc, collection, getFirestore } from "firebase/firestore";

const db = getFirestore();

const aux = collection(db, nombreColeccion)

productos.forEach(producto => addDoc(aux, producto))