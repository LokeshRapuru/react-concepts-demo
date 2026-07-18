import { useState, useMemo, useCallback, memo } from 'react'

// CONCEPT: React.memo - skip re-rendering a child if its props haven't changed
const ListDisplay = memo(function ListDisplay({ items, onClear }) {
  console.log('ListDisplay rendered')
  return (
    <div>
      <ul>{items.map((n) => <li key={n}>{n}</li>)}</ul>
      <button onClick={onClear}>Clear</button>
    </div>
  )
})

function slowDouble(n) {
  // simulate expensive work
  let result = 0
  for (let i = 0; i < 200000; i++) result += 1
  return n * 2
}

function ExpensiveCalc() {
  const [number, setNumber] = useState(1)
  const [unrelated, setUnrelated] = useState(0)
  const [items, setItems] = useState([1, 2, 3])

  // CONCEPT: useMemo - cache an expensive calculation, only recompute when deps change
  const doubled = useMemo(() => slowDouble(number), [number])

  // CONCEPT: useCallback - cache a function reference so memoized children
  // don't re-render just because a new function was created on every render
  const clearItems = useCallback(() => setItems([]), [])

  return (
    <div>
      <p>Number: {number}, doubled (memoized): {doubled}</p>
      <button onClick={() => setNumber(number + 1)}>Increment number</button>{' '}
      <button onClick={() => setUnrelated(unrelated + 1)}>
        Re-render parent only ({unrelated})
      </button>
      <ListDisplay items={items} onClear={clearItems} />
      <p style={{ fontSize: 12, color: '#666' }}>
        Open the console: "ListDisplay rendered" should NOT log when you click
        "Re-render parent only", because its props didn't change.
      </p>
    </div>
  )
}

export default ExpensiveCalc
