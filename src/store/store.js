import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice.js'
import cartReducer from './cartSlice.js'

// CONCEPT: The store
// One global object holding all app state, built from combined slice reducers.
// Any component anywhere in the tree can read from it (useSelector) or
// dispatch actions to it (useDispatch), without prop drilling.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
})
