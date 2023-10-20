import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Formulario = () => {

    const {cart,setCart} = useContext(Context);

    return (
        <>
            <div className='container-fluid'>
                <div className="mb-3">
                    <label for="nombre" className="form-label">Nombre</label>
                    <input type='text' className="form-control" id="nombre" placeholder="ingrese su nombre" />
                </div>
                <div className="mb-3">
                    <label for="apellido" className="form-label">Apellido</label>
                    <input type='text' className="form-control" id="apellido" placeholder="ingrese su apellido" />
                </div>
                <div className="mb-3">
                    <label for="celular" className="form-label">Celular</label>
                    <input type='number' className="form-control" id="celular" placeholder="ingrese su numero" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="ingrese su email" />
                </div>
                <div className="mb-3">
                    <label for="email2" className="form-label">Confirmar Email</label>
                    <input type="email" className="form-control" id="email2" placeholder="cofirme su email" />
                </div>
            </div>
        </>
    )
}
