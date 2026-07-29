import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { store } from './store/store.js'
import './styles.css'

// CONCEPT: where providers go
// BrowserRouter enables routing for everything inside it.
// Redux's Provider makes the store available to useSelector/useDispatch
// anywhere inside it, the same way Context.Provider does for a Context.
// Order between these two doesn't matter - they don't depend on each other.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
