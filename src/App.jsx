import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import ConceptsPage from './pages/ConceptsPage.jsx'
import ReduxPage from './pages/ReduxPage.jsx'
import UsersList from './pages/UsersList.jsx'
import UserProfile from './pages/UserProfile.jsx'
import NotFound from './pages/NotFound.jsx'

// CONCEPT: Routes + Route
// <Routes> looks at the current URL and renders the first matching <Route>.
// This all happens client-side - clicking a Nav link updates the URL via
// the History API and swaps the rendered page, without a server round trip
// or full page reload.
function App() {
  return (
    <div className="app">
      <h1>React Concepts Playground</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concepts" element={<ConceptsPage />} />
        <Route path="/redux" element={<ReduxPage />} />
        <Route path="/users" element={<UsersList />} />
        {/* :id is a dynamic segment, read via useParams() in UserProfile */}
        <Route path="/users/:id" element={<UserProfile />} />
        {/* catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
