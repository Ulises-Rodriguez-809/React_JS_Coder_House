import React from 'react';

export const LiElementos = ({ nombre, url }) => {
    return (
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href={url}>{nombre}</a>
        </li>
    )
}
