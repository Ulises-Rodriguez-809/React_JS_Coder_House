import React, { useState } from 'react'

export const Counter = () => {

    const [count, setCount] = useState(0);

    const incrementar = ()=>{
        setCount(prevCount => prevCount + 1);
    }

    const decrementar = ()=>{
        (count !== 0 ) && setCount(prevCount => prevCount - 1); 
    }

    return (
        <>
        <div className='divBtnCounterContainer'>
            <button onClick={incrementar}>+</button>
            <p>{count}</p>
            <button onClick={decrementar}>-</button>
        </div>
        </>
    )
}
