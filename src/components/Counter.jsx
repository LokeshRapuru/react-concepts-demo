import { useState } from 'react'

// CONCEPT: useState (local component state)
// Every time setCount runs, React re-renders this component with the new value.
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
	  <button onClick={() => count <= 0 ? setCount(0) : setCount(count - 1)}>-</button>{' '}
      <button onClick={() => setCount(count + 1)}>+</button>{' '}
      <button onClick={() => setCount(0)}>Reset</button><br></br>
	  <button onClick={() => setCount(count + 2)}>Step up by 2</button>{' '}
	  <button onClick={() => count <= 0 ? setCount(0) : setCount(count - 2)}>Step down by 2</button>
    </div>
  )
}

export default Counter
