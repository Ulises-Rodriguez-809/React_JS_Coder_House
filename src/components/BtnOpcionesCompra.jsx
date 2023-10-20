import React, { useContext } from 'react'
import { Context } from '../context/Context';
import { useNavigate } from 'react-router-dom';

export const BtnOpcionesCompra = ({ opcion }) => {

    const { setCart, setCliente } = useContext(Context);

    const navigate = useNavigate();

    const opciones = (e) => {
        const { target } = e;
        const { value } = target;

        if (value === "Reset") {
            setCart({
                productos : [],
                precioTotal : 0
            });

            setCliente({})

        }
        else {
            //navegar a link donde te muestra el resumen de la compra
            //podes eliminar algun q otro producto de forma individual
            //y el formulario donde pones los datos q se cargan a las ordenes de firestore
            //cambia las descripciones en firestore xq estan muy largas y se rompen los estilos
            //o modifica el .json y volvelos a subir ahora con un campo nuevo q sea descripcion 2 o mas corta o algo asi
            navigate("/checkout");
        }
    }

    return <button onClick={opciones} value={opcion}>{opcion}</button>
}
