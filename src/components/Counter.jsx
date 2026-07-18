import { useState } from 'react'

// CONCEPT: useState (local component state)
// Every time setCount runs, React re-renders this component with the new value.
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>{' '}
      <button onClick={() => setCount(count + 1)}>+</button>{' '}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
