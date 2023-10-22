import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { comprobarDatos } from '../funJS/comprobarDatos';
import { addToFireStore } from '../funJS/firebaseAdd';
import { alertSweet } from '../funJS/alertSweet';


export const BtnRealizarCompra = () => {

    const { cart,cliente,isLogin } = useContext(Context);

    const realizarCompra = () => {
        comprobarDatos(cliente);
        
        if (comprobarDatos(cliente) || isLogin) {

            const orden = [
                {
                    clienteDatos : {...cliente},
                    cartDatos : {...cart}
                }
            ]
            
            addToFireStore("ordenes",orden);

            alertSweet("success","Todo correcto","La compra se realizo con exito");
            //falta mostrar id del comprador en el alert prodria ser
            //FALTA Q MODIFIQUE EL STOCK DE LOS PRODUCTOS
        }
    }

    return (
        <>
            <button type='button' onClick={realizarCompra}>Confirmar Compra</button>
        </>
    )
}
