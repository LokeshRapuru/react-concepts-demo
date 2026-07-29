import { NavLink } from 'react-router-dom'

// CONCEPT: NavLink vs Link
// <Link> just navigates without a page reload (unlike a plain <a>, which
// would trigger a full browser reload and lose all React state).
// <NavLink> is the same but also gives you an "isActive" style/class,
// handy for highlighting the current page in a nav bar.
const linkStyle = ({ isActive }) => ({
  marginRight: 12,
  fontWeight: isActive ? 'bold' : 'normal',
  textDecoration: isActive ? 'underline' : 'none',
})

function Nav() {
  return (
    <nav style={{ marginBottom: 20 }}>
      <NavLink to="/" style={linkStyle} end>Home</NavLink>
      <NavLink to="/concepts" style={linkStyle}>Hooks & Context</NavLink>
      <NavLink to="/redux" style={linkStyle}>Redux</NavLink>
      <NavLink to="/users" style={linkStyle}>Router Demo</NavLink>
    </nav>
  )
}

export default Nav
