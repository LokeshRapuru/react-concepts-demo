import { createSlice } from '@reduxjs/toolkit'

// CONCEPT: same logic as the useReducer CartReducer example, but as global
// Redux state instead of state local to one component tree.
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
      state.total += action.payload.price
    },
    removeItem: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload)
      state.items = state.items.filter((i) => i.id !== action.payload)
      if (item) state.total -= item.price
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
    },
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
