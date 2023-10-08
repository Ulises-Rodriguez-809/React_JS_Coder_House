import React from 'react'

export const CarritoLi = ({nombreProducto}) => {

    return (
        <>
            <li>
                <div>{nombreProducto}</div>
            </li>
            <li><hr className="dropdown-divider" /></li>
        </>
    )
}
