import { useState, useEffect } from 'react'

// CONCEPT: useEffect (side effects + cleanup)
// Runs after render. The interval is a "side effect" - something outside
// React's normal render flow. The returned function is cleanup, called
// when the component unmounts or before the effect re-runs.
function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(true)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setSeconds((s) => s + 1), 1000) // This setInterval() method [originally window.setInterval] starts a background browser timer and returns a unique ID that can be referenced later in code. This timer updates the seconds variable using setSeconds function every 1000ms
    return () => clearInterval(id) // cleanup
  }, []) // re-run effect only when `running` changes

  return (
    <div>
      <p>Elapsed: {seconds}s</p>
      <button onClick={() => setRunning((isRunning) => !isRunning)}>
        {running ? 'Pause' : 'Resume'}
      </button>
    </div>
  )
}

export default Timer
