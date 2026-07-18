import { useReducer } from 'react'

// CONCEPT: useReducer
// Preferred over useState when you have complex state logic with
// multiple sub-values or the next state depends on the action taken.
function cartReducer(state, action) {
  switch (action.type) {
    case 'add':
      return { items: [...state.items, action.payload], total: state.total + action.payload.price }
    case 'remove': {
      const item = state.items.find((i) => i.id === action.payload)
      return {
        items: state.items.filter((i) => i.id !== action.payload),
        total: state.total - (item ? item.price : 0),
      }
    }
    case 'clear':
      return { items: [], total: 0 }
    default:
      throw new Error('Unknown action: ' + action.type)
  }
}

const products = [
  { id: 1, name: 'Book', price: 12 },
  { id: 2, name: 'Pen', price: 2 },
  { id: 3, name: 'Bag', price: 25 },
]

function CartReducer() {
  const [cart, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

  return (
    <div>
      <div>
        {products.map((p) => (
          <button key={p.id} onClick={() => dispatch({ type: 'add', payload: p })}>
            Add {p.name} (${p.price})
          </button>
        ))}
      </div>
      <ul>
        {cart.items.map((item, idx) => (
          <li key={idx}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => dispatch({ type: 'remove', payload: item.id })}>remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.total}</p>
      <button onClick={() => dispatch({ type: 'clear' })}>Clear cart</button>
    </div>
  )
}

export default CartReducer
