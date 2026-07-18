# React Concepts Playground

A single small app where every section demonstrates one core React concept.
Run it, read the code, tweak it — that's the fastest way to actually learn this stuff.

## Setup

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## How to work through it

Go through the sections in order. For each one: read the comment block at the
top of the file, play with it in the browser, then intentionally break
something and see what happens.

| # | Concept | File |
|---|---------|------|
| 1 | Components, Props, JSX | `src/components/Greeting.jsx` |
| 2 | `useState` | `src/components/Counter.jsx` |
| 3 | `useEffect` + cleanup | `src/components/Timer.jsx` |
| 4 | Lists/keys, controlled forms, events, conditional rendering | `src/components/TodoList.jsx` |
| 5 | Context API (`createContext`, `useContext`) | `src/context/ThemeContext.jsx`, `src/components/ThemeToggle.jsx` |
| 6 | `useReducer` | `src/components/CartReducer.jsx` |
| 7 | `useRef` (DOM refs + persisting values) | `src/components/FocusInput.jsx` |
| 8 | `useMemo`, `useCallback`, `React.memo` (performance) | `src/components/ExpensiveCalc.jsx` |
| 9 | Custom hooks + data fetching + loading/error state | `src/hooks/useFetch.js`, `src/components/UserList.jsx` |
| 10 | More conditional rendering patterns | `src/components/ConditionalRender.jsx` |

## Step-by-step walkthrough

### 1. Components, Props, JSX
A React component is a function returning JSX (HTML-like syntax that compiles
to `React.createElement` calls). `Greeting` takes `name` and `role` as props —
data passed down from a parent, read-only inside the child.

**Try:** pass a new prop, e.g. `<Greeting name="Ada" role="Admin" age={30} />`,
and use `{age}` inside `Greeting`.

### 2. `useState`
State is data that changes over time and causes a re-render when updated.
`Counter` shows the basic pattern: `const [value, setValue] = useState(initial)`.
Calling `setValue` schedules a re-render with the new value.

**Try:** add a `step` piece of state so + and - move by a custom amount.

### 3. `useEffect`
Effects handle anything outside the render itself — timers, subscriptions,
manually touching the DOM, fetching data. `Timer` starts an interval and
**cleans it up** (returns a function from the effect) to avoid leaks.
The dependency array (`[running]`) controls when the effect re-runs.

**Try:** remove the dependency array entirely and see the timer behave
differently (it'll reset the interval on every render).

### 4. Lists, keys, forms, events
`TodoList` covers four things at once:
- **Controlled inputs**: the input's value lives in state, not the DOM.
- **Event handling**: `onSubmit`, `onChange`, `onClick`.
- **Lists & keys**: `.map()` to render arrays; `key` must be stable/unique
  (never array index if items can reorder or be removed from the middle).
- **Immutable updates**: always build a *new* array/object rather than
  mutating state directly (`.map()`, `.filter()`, spread `{...obj}`).

**Try:** add an "edit" button that lets you rename a todo in place.

### 5. Context API
Context solves "prop drilling" — passing a prop through five components that
don't need it just so the sixth one can use it. `ThemeContext` provides
`theme` and `toggleTheme` to any descendant via `useTheme()`, no matter how
deep it's nested.

**Try:** wrap more of `App` in `<ThemeProvider>` and add a second consumer
component elsewhere in the tree.

### 6. `useReducer`
When state updates involve multiple related fields or several possible
"actions," a reducer (`(state, action) => newState`) is often cleaner than
several `useState` calls. `CartReducer` handles `add`, `remove`, and `clear`
as distinct actions dispatched to one function.

**Try:** add a `discount` action that reduces `total` by a percentage.

### 7. `useRef`
Two common uses, both shown in `FocusInput`:
- Getting a direct handle to a DOM node (`inputRef.current.focus()`).
- Storing a mutable value that persists across renders **without** causing
  a re-render when it changes (unlike state).

**Try:** log `renderCount.current` and compare it to what a `useState`
counter would do if you used that instead.

### 8. `useMemo`, `useCallback`, `React.memo`
Performance tools — use them when you've noticed an actual problem, not by
default:
- `useMemo` caches an expensive **value** between renders.
- `useCallback` caches a **function reference** so it doesn't count as "new
  props" on every render.
- `React.memo` skips re-rendering a component if its props are unchanged.

`ExpensiveCalc` is set up so you can watch this in the console: clicking
"Re-render parent only" won't log `"ListDisplay rendered"` again, because
memoization is doing its job.

**Try:** remove `memo()` from `ListDisplay` and see it re-render every time.

### 9. Custom hooks + data fetching
`useFetch(url)` is a custom hook: a plain function that calls other hooks
(`useState`, `useEffect`) and returns whatever's useful. This is how you
share stateful logic across components without repeating yourself.
`UserList` shows the typical `loading` / `error` / `data` pattern for
real-world data fetching.

**Try:** write your own `useLocalStorage(key, initialValue)` hook that syncs
a piece of state to `localStorage`.

### 10. Conditional rendering patterns
Three idioms side by side: ternary (`cond ? a : b`), short-circuit (`cond &&
<X/>`), and (in other files) early `return null`. `ConditionalRender` shows
where each reads best.

## Where to go from here

Once this feels comfortable, natural next steps are:
- **React Router** for multi-page navigation.
- **Form libraries** (react-hook-form) for complex forms with validation.
- **Data fetching libraries** (TanStack Query) which handle caching,
  retries, and race conditions that `useFetch` here does only minimally.
- **State management** (Zustand, Redux Toolkit) once Context alone starts
  feeling unwieldy for global state.
