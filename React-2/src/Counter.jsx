import React, { useState } from 'react';
import './App.css';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="box">
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => count > 0 && setCount(count - 1)} disabled={count === 0}>Decrement</button>
        </div>
    );
}

export default Counter;