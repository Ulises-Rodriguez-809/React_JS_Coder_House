import React from 'react';

export const CantidadProductos = ({ cantindad = 0 }) => {
    return (
        <span className="position-absolute translate-middle badge rounded-pill bg-success" style={{ top: 15, right: 50 }}>
            {cantindad}
        </span>
    )
}
