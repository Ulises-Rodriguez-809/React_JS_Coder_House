import React from 'react';

export const CantidadProductos = ({ cantindad = 0, style={ top: 15, right: 50 } }) => {
    return (
        <span className="position-absolute translate-middle badge rounded-pill bg-success" style={style}>
            {cantindad}
        </span>
    )
}
