import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem, clearCart } from '../store/cartSlice.js'

const products = [
  { id: 1, name: 'Book', price: 12 },
  { id: 2, name: 'Pen', price: 2 },
  { id: 3, name: 'Bag', price: 25 },
]

// CONCEPT: this is functionally identical to CartReducer.jsx (useReducer),
// but the cart state now lives in the global Redux store instead of one
// component's local state - any component in the app could read it.
function ReduxCart() {
  const { items, total } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        {products.map((p) => (
          <button key={p.id} onClick={() => dispatch(addItem(p))}>
            Add {p.name} (${p.price})
          </button>
        ))}
      </div>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => dispatch(removeItem(item.id))}>remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={() => dispatch(clearCart())}>Clear cart</button>
    </div>
  )
}

export default ReduxCart
