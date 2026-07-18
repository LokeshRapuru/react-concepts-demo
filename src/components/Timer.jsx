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
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id) // cleanup
  }, [running]) // re-run effect only when `running` changes

  return (
    <div>
      <p>Elapsed: {seconds}s</p>
      <button onClick={() => setRunning((r) => !r)}>
        {running ? 'Pause' : 'Resume'}
      </button>
    </div>
  )
}

export default Timer
