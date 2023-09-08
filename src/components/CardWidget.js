import React from 'react';
import { CantidadProductos } from './CantidadProductos';
import { ListGroup, NavDropdown } from 'react-bootstrap';
import { JuegoLista } from './JuegoLista';
import { CarritoImg } from './CarritoImg';

export const CardWidget = () => {

    const comprar = () => {
        alert("Tu Compra se completo con exito!!!");
    }

    return (
        <>
            <div className='carritoContainer'>
                <CantidadProductos cantindad={5} />
                <NavDropdown title={<CarritoImg />} id="basic-nav-dropdown">
                    <ListGroup>
                        <ListGroup.Item >
                            <JuegoLista nombre="Castlevania sn" precio="10200" />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <JuegoLista nombre="Battletoads" precio="12200" />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <JuegoLista nombre="Super Mario 64" precio="13040" />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <JuegoLista nombre="Atari 2600" precio="35000" />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <JuegoLista nombre="Playstation 1" precio="31600" />
                        </ListGroup.Item>
                    </ListGroup>
                    <button type='button' onClick={comprar} >Comprar</button>
                </NavDropdown>
            </div>
        </>
    )
}
