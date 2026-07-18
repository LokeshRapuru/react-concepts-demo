import { useTheme } from '../context/ThemeContext.jsx'

// CONCEPT: consuming Context via a custom hook, no props needed
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={theme === 'dark' ? 'theme-dark' : ''} style={{ padding: 10, borderRadius: 6 }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}

export default ThemeToggle
