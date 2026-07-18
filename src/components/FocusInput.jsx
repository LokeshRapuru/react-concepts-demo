import { useRef, useEffect } from 'react'

// CONCEPT: useRef
// Holds a mutable value that doesn't trigger re-renders when changed.
// Most common use: direct access to a DOM node.
function FocusInput() {
  const inputRef = useRef(null)
  const renderCount = useRef(0) // also useful for values that persist across renders

  useEffect(() => {
    renderCount.current += 1
  })

  return (
    <div>
      <input ref={inputRef} placeholder="Click button to focus me" />{' '}
      <button onClick={() => inputRef.current.focus()}>Focus input</button>
      <p>This component has rendered {renderCount.current} time(s).</p>
    </div>
  )
}

export default FocusInput
