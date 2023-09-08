import React from 'react';
import { Badge } from 'react-bootstrap';

export const JuegoLista = ({ nombre, precio }) => {
    return (
        <>
            <div>
                {nombre}
            </div>
            <Badge bg="primary" pill>
                {`$${precio}`}
            </Badge>
        </>
    )
}
