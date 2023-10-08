import React from 'react'
import { BtnComprar } from './BtnComprar'
import { Counter } from './Counter'
import { BtnDetalle } from './BtnDetalle'

export const Item = ({ url,titulo, descripcion, precio, style={width : "18rem", height : "fit-content"}, stock ,children }) => {
    return (
        <>
            <div className="card" style={style}>
                <h2>{titulo}</h2>
                {children}
                <div className="card-body divTextCard">
                    <p className="card-text">{descripcion}</p>
                    <p className="card-text">{`$${precio}`}</p>
                </div>
                <div className='divComprar'>
                    <Counter stock={stock}/>
                    <div className='btnContinaer'>
                        <BtnDetalle url={url}/>
                        <BtnComprar />
                    </div>
                </div>
            </div>
        </>
    )
}
