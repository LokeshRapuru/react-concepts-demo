import { useParams, useNavigate, Link } from 'react-router-dom'

const users = {
  1: { id: 1, name: 'Ada Lovelace', bio: 'Wrote the first published algorithm.' },
  2: { id: 2, name: 'Grace Hopper', bio: 'Pioneered machine-independent programming languages.' },
  3: { id: 3, name: 'Alan Turing', bio: 'Formalized the concepts of algorithm and computation.' },
}

// CONCEPT: useParams reads dynamic segments from the URL (":id" below).
// CONCEPT: useNavigate lets you navigate programmatically (e.g. after a
// form submit, or a "Back" button) instead of via a <Link> click.
function UserProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const user = users[id]

  if (!user) {
    return (
      <section>
        <p>No user with id "{id}".</p>
        <Link to="/users">Back to list</Link>
      </section>
    )
  }

  return (
    <section>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <button onClick={() => navigate(-1)}>Go back</button>{' '}
      <button onClick={() => navigate('/users')}>Back to list (programmatic)</button>
    </section>
  )
}

export default UserProfile
