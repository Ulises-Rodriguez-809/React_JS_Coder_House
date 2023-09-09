import React from 'react';
import { CarritoImg } from './CarritoImg';
import { CantidadProductos } from './CantidadProductos';

export const CardWidget = () => {
    return (
        <>
        {/* <ul>

        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <CarritoImg />
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>
        </ul> */}
            <CantidadProductos cantindad={5} />
            <CarritoImg />

        </>
    )
}
