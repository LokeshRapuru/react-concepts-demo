import { Link } from 'react-router-dom'

// CONCEPT: catch-all / 404 route
// A route with path="*" matches anything not matched by earlier routes.
function NotFound() {
  return (
    <section>
      <h2>404 - Page not found</h2>
      <p>That route doesn't exist.</p>
      <Link to="/">Go home</Link>
    </section>
  )
}

export default NotFound
