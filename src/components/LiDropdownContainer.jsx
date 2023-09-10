import React from 'react';
import { LiDropdown } from './LiDropdown';

export const LiDropdownContainer = ({nombre}) => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {nombre}
            </a>
            <ul className="dropdown-menu">
                <LiDropdown categoria="PlayStation" url="#playStation"/>
                <LiDropdown categoria="Xbox" url="#xbox"/>
                <LiDropdown categoria="Nintendo" url="#nintendo"/>
                <LiDropdown categoria="Portatiles" url="#portatiles"/>
            </ul>
        </li>
    )
}
