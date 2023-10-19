import { useEffect } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";


export const addToFireStore = (nombreColeccion,arr)=>{

    useEffect(() => {
        const db = getFirestore();
        
        const aux = collection(db, nombreColeccion);
        
        arr.forEach(item => addDoc(aux, item));
    }, [])
    
}
