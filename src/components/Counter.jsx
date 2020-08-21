import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../actions/increment';
import { decrement } from '../actions/decrement';

function Counter() {
    const dispatch = useDispatch();
    const number = useSelector((state) => state.number);
    
    return (
        <div>
            <button onClick={(e) => dispatch(increment())}>Sumar 1</button>
            <p>{number}</p>
            <button onClick={(e) => dispatch(decrement())}>Restar 1</button>   
        </div>
    );
}

export default Counter;
