import Greeting from '../components/Greeting.jsx'
import Counter from '../components/Counter.jsx'
import Timer from '../components/Timer.jsx'
import TodoList from '../components/TodoList.jsx'
import { ThemeProvider } from '../context/ThemeContext.jsx'
import ThemeToggle from '../components/ThemeToggle.jsx'
import CartReducer from '../components/CartReducer.jsx'
import FocusInput from '../components/FocusInput.jsx'
import ExpensiveCalc from '../components/ExpensiveCalc.jsx'
import UserList from '../components/UserList.jsx'
import ConditionalRender from '../components/ConditionalRender.jsx'

// All the hook + Context demos from before, now living at /concepts
// instead of being the entire app.
function ConceptsPage() {
  return (
    <div>
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
        <p style={{ fontSize: 14, color: '#555' }}>
          ThemeProvider wraps just ThemeToggle here, but it could wrap the
          whole app. Any descendant, no matter how deeply nested, can call
          useTheme() without props being passed down manually.
        </p>
        <ThemeProvider>
          <ThemeToggle />
        </ThemeProvider>
      </section>

      <section>
        <h2>6. useReducer (local, component-scoped)</h2>
        <p style={{ fontSize: 14, color: '#555' }}>
          Compare this to the Redux page — same cart logic, but this state
          only exists inside this one component tree.
        </p>
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

export default ConceptsPage
