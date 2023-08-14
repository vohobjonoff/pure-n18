/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count => count + 1);
      };
  



  return (
      <div>
          <button onClick={increase}>inc</button>
          <span>{count}</span>
          
          
    </div>
  )
}
