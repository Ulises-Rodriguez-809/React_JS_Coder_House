import React, { useContext } from 'react'
import { Context } from '../context/Context';

export const BtnOpcionesCompra = ({ opcion }) => {

    const { setCart, setPrecioTotal } = useContext(Context);

    const opciones = (e) => {
        const { target } = e;
        const { value } = target;

        if (value === "Reset") {

            setCart({
                cliente: {
                    name: "",
                    cell: "",
                    email: "",
                    email2: ""
                },
                productos: []
            });

            setPrecioTotal(0);
        }
        else {
            //navegar a link donde te muestra el resumen de la compra
            //podes eliminar algun q otro producto de forma individual
            //y el formulario donde pones los datos q se cargan a las ordenes de firestore
            alert("Tus productos fueron comprados con exito");
        }
    }


    return (
        <button onClick={opciones} value={opcion}>{opcion}</button>
    )
}
