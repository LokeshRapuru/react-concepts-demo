import Greeting from './components/Greeting.jsx'
import Counter from './components/Counter.jsx'
import Timer from './components/Timer.jsx'
import TodoList from './components/TodoList.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import CartReducer from './components/CartReducer.jsx'
import FocusInput from './components/FocusInput.jsx'
import ExpensiveCalc from './components/ExpensiveCalc.jsx'
import UserList from './components/UserList.jsx'
import ConditionalRender from './components/ConditionalRender.jsx'

// Each <section> below maps 1:1 to a step in README.md.
// Open the components alongside the README to see concept + code together.
function App() {
  return (
    <div className="app">
      <h1>React Concepts Playground</h1>

      <section>
        <h2>1. Components, Props & JSX</h2>
        <Greeting name="Ada" role="Admin" />
      </section>

      <section>
        <h2>2. useState</h2>
        <Counter />
      </section>

      <section>
        <h2>3. useEffect</h2>
        <Timer />
      </section>

      <section>
        <h2>4. Lists, Keys, Forms & Events</h2>
        <TodoList />
      </section>

      <section>
        <h2>5. Context API</h2>
        <ThemeProvider>
          <ThemeToggle />
        </ThemeProvider>
      </section>

      <section>
        <h2>6. useReducer</h2>
        <CartReducer />
      </section>

      <section>
        <h2>7. useRef</h2>
        <FocusInput />
      </section>

      <section>
        <h2>8. useMemo, useCallback & React.memo</h2>
        <ExpensiveCalc />
      </section>

      <section>
        <h2>9. Custom Hooks & Data Fetching</h2>
        <UserList />
      </section>

      <section>
        <h2>10. Conditional Rendering Patterns</h2>
        <ConditionalRender />
      </section>
    </div>
  )
}

export default App
