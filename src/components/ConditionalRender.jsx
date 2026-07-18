import { useState } from 'react'

// CONCEPT: More conditional rendering patterns (ternary, &&, early return)
function ConditionalRender() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [notifications, setNotifications] = useState(3)

  return (
    <div>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? 'Log out' : 'Log in'}
      </button>

      {/* ternary */}
      <p>{loggedIn ? 'Welcome back!' : 'Please log in.'}</p>

      {/* && short-circuit: only renders if loggedIn is true */}
      {loggedIn && notifications > 0 && (
        <p>You have {notifications} new notifications.</p>
      )}

      <button onClick={() => setNotifications(0)}>Clear notifications</button>
    </div>
  )
}

export default ConditionalRender
