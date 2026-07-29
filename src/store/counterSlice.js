import { createSlice } from '@reduxjs/toolkit'

// CONCEPT: Redux slice (Redux Toolkit)
// A "slice" bundles a piece of state + the reducers that update it + the
// action creators, generated automatically. This replaces hand-written
// action types, action creators, and switch-statement reducers from
// "classic" Redux.
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    // Redux Toolkit uses Immer internally, so this LOOKS like mutation
    // but it's actually producing an immutable update behind the scenes.
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    incrementByAmount: (state, action) => { state.value += action.payload },
    reset: (state) => { state.value = 0 },
  },
})

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions
export default counterSlice.reducer
