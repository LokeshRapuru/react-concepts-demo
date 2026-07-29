import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from '../store/counterSlice.js'

// CONCEPT: useSelector reads a slice of the store (component re-renders
// only when the SPECIFIC value it selects changes, not on any store update).
// CONCEPT: useDispatch sends an action to the store to trigger an update.
function ReduxCounter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <p>Redux count: {count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>{' '}
      <button onClick={() => dispatch(increment())}>+</button>{' '}
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>{' '}
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default ReduxCounter
