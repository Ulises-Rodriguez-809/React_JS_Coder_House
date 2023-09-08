import React from 'react';
import { Badge } from 'react-bootstrap';

export const CantidadProductos = ({cantindad}) => {
    return <Badge bg="primary" pill>{cantindad}</Badge>
}
