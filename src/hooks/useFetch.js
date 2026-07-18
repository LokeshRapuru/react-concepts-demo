import { useState, useEffect } from 'react'

// CONCEPT: Custom hooks
// A custom hook is just a function starting with "use" that calls other hooks.
// It lets you extract and reuse stateful logic across components.
export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Request failed: ' + res.status)
        return res.json()
      })
      .then((json) => { if (!cancelled) setData(json) })
      .catch((err) => { if (!cancelled) setError(err.message) })
      .finally(() => { if (!cancelled) setLoading(false) })

    return () => { cancelled = true } // avoid setting state after unmount
  }, [url])

  return { data, loading, error }
}
