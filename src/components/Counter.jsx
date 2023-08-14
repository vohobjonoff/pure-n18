/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count => count + 1);
      };
    const decrease = () => {
        setCount(count => count - 1);
      };
    const reset = () => {
        setCount(count => count = 0);
      };



  return (
      <div>
          <button onClick={increase}>inc</button>
          <span>{count}</span>
          <button onClick={decrease}>dec</button>
          <button onClick={reset}>dec</button>
          
    </div>
  )
}
