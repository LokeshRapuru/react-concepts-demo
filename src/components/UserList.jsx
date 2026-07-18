import { useFetch } from '../hooks/useFetch.js'

// CONCEPT: Using a custom hook + async data fetching + loading/error states
function UserList() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users?_limit=5')

  if (loading) return <p>Loading users...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <ul>
      {data.map((u) => (
        <li key={u.id}>{u.name} — {u.email}</li>
      ))}
    </ul>
  )
}

export default UserList
