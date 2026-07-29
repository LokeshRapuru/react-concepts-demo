import ReduxCounter from '../components/ReduxCounter.jsx'
import ReduxCart from '../components/ReduxCart.jsx'

function ReduxPage() {
  return (
    <div>
      <section>
        <h2>Redux: global counter</h2>
        <p style={{ fontSize: 14, color: '#555' }}>
          This counter's state lives in the Redux store (src/store/counterSlice.js),
          not in this component. Any component anywhere in the app could
          read or update it with useSelector / useDispatch — try opening
          Redux DevTools in the browser extension to watch actions fire.
        </p>
        <ReduxCounter />
      </section>

      <section>
        <h2>Redux: global cart</h2>
        <p style={{ fontSize: 14, color: '#555' }}>
          Same logic as the useReducer cart on the Concepts page, but this
          version's state is global. Navigate away to another page and back
          — the cart contents persist, because the store lives above the
          router, not inside this page component.
        </p>
        <ReduxCart />
      </section>
    </div>
  )
}

export default ReduxPage
