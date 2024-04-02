import React from 'react'
import "./Counter.css";

function Counter() {

    const [counter, setCounter] = React.useState({num: 0});

    function increment() {
        const newCounter = counter.num + 1;
        setCounter((prevState) => ({
            ...prevState,
            num: newCounter
        }));
    }

    function decrement() {
        const newCounter = counter.num - 1;
        setCounter((prevState) => ({
            ...prevState,
            num: newCounter
        }));
    }

    //style={{marginRight: spacing + 'em'}}
  return (
    <div className='counter'>
        
        <h1>{counter.num}</h1>
        <div className='button-row'>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    </div>
  )
}

export default Counter