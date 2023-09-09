import React from 'react';

export const LiElementos = ({ nombre }) => {
    return (
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">{nombre}</a>
        </li>
    )
}
