import React, { useContext} from 'react'
import { Context } from '../context/Context'
import { Formulario } from '../components/Formulario';
import { BtnOpcionesCompra } from '../components/BtnOpcionesCompra';
import { BtnRealizarCompra } from '../components/BtnRealizarCompra';
import { UlProducto } from '../components/UlProducto';

export const Checkout = () => {
    const { cart, isLogin} = useContext(Context);


    if (cart["productos"].length === 0) {
        return <h1>El carrito esta vacio</h1>
    }


    return (
        <>
            <div className='container-fluid'>
                <div className='container-fluid'>
                    <div className='resumenTitulo'>
                        Resumen de compra
                    </div>
                    <div>
                        <div className='resumenContainer'>
                            <ul className='ulResumenCompra'>
                                <li>
                                    Producto
                                </li>
                                <li>
                                    Cantidad
                                </li>
                                <li>
                                    Precio Unitario
                                </li>
                                <li>
                                    Precio Total
                                </li>
                            </ul>
                            {cart["productos"].map(producto => <UlProducto key={producto.name} producto={producto}/>)}
                        </div>
                        <div className='container-fluid precioTotal'>
                            <p>Precio Total_________${Math.round(cart["precioTotal"] * 100) / 100}</p>
                        </div>
                    </div>
                </div>
                {!isLogin ? <div className='container-fluid'>
                    <div className='container-fluid'>
                        <Formulario />
                    </div>
                </div> : ""}
                <div className='container-fluid'>
                    <BtnOpcionesCompra opcion={"Reset"} />
                    <BtnRealizarCompra />
                </div>
            </div>
        </>

    )
}
