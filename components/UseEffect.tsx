import React, {useState} from 'react'

const UseEffect = () => {
    
    const [count, setCount] = useState(0);

      function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default UseEffect
