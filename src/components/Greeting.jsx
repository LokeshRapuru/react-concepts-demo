// CONCEPT: Components + Props + JSX
// A component is just a function that returns JSX.
// Props are how a parent passes data down to a child.
function Greeting({ name, role }) {
  return (
    <p>
      Hello, <strong>{name}</strong>! You are logged in as <em>{role}</em>.
    </p>
  )
}

export default Greeting
