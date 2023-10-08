import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

export const BtnDetalle = ({url}) => {

    return (
        <>
            <Link to={`/${url}`} target='_blank'>
                <button>Detalles</button>
            </Link>
        </>
    )
}
