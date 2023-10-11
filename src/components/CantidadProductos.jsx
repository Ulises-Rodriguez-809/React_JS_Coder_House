import React, { useContext } from 'react';
import { Context } from '../context/Context';

export const CantidadProductos = ({style={ top: 15, right: 50 }}) => {

    const {productos} = useContext(Context);

    return (
        <span className="position-absolute translate-middle badge rounded-pill bg-success" style={style}>
            {productos}
        </span>
    )
}
