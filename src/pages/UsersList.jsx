import { Link } from 'react-router-dom'

const users = [
  { id: 1, name: 'Ada Lovelace' },
  { id: 2, name: 'Grace Hopper' },
  { id: 3, name: 'Alan Turing' },
]

// CONCEPT: linking to a dynamic route
// Each Link points to /users/:id with a real id value. Clicking navigates
// client-side (no reload) and matches the :id route below.
function UsersList() {
  return (
    <section>
      <h2>Router Demo: dynamic routes</h2>
      <p>Click a user to navigate to <code>/users/:id</code>.</p>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default UsersList
