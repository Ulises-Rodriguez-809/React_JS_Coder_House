import React from 'react';
import { Brand } from './Brand';
import { CardWidget } from './CardWidget';
import { LiElementos } from './LiElementos';
import { LiDropdownContainer } from './LiDropdownContainer';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Brand />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <LiElementos nombre="Juegos 64bits" url="#juegos64bits"/>
                        <LiElementos nombre="Revistas Retro" url="#revistasRetro"/>
                        <LiElementos nombre="Figuras" url="#figuras"/>
                        <LiDropdownContainer nombre="Consolas Retro" />
                    </ul>
                    <CardWidget />
                </div>
            </div>
        </nav>
    )
}
