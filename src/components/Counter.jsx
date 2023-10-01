import React, { useState } from 'react'

export const Counter = ({stock}) => {

    const [count, setCount] = useState(0);

    const incrementar = ()=>{
        (stock > count) && setCount(prevCount => prevCount + 1);
    }

    const decrementar = ()=>{
        (count !== 0 ) && setCount(prevCount => prevCount - 1); 
    }

    return (
        <>
        <div className='divBtnCounterContainer'>
            <button onClick={decrementar}>-</button>
            <p>{count}</p>
            <button onClick={incrementar}>+</button>
        </div>
        </>
    )
}
