import React from 'react';
import { CarritoImg } from './CarritoImg';
import { CantidadProductos } from './CantidadProductos';
import { CarritoLi } from './CarritoLi';
import { Precio } from './Precio';
import { BtnComprar } from './BtnComprar';

export const CardWidget = () => {
    return (
        <>
            <div className="btn-group dropstart">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <CantidadProductos cantindad={5} />
                    <CarritoImg />
                </button>
                <ul className="dropdown-menu ulCarrito">
                    <CarritoLi nombreProducto="Castelvania SN" />
                    <CarritoLi nombreProducto="BattleToads" />
                    <CarritoLi nombreProducto="Atari 2600" />
                    <CarritoLi nombreProducto="Figura: Cloud FF7" />
                    <CarritoLi nombreProducto="Figura: Funko-pop Messi" />
                    <li>
                        <ul className='ulComprar'>
                            <Precio precio={50000}/>
                            <li>
                                <BtnComprar />
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}
