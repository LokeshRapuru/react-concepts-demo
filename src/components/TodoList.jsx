import { useState, useEffect } from 'react'

// CONCEPT: Lists + keys, controlled forms, event handling, conditional rendering
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn JSX', done: true, isEdit: false },
    { id: 2, text: 'Learn hooks', done: false, isEdit: false },
	{ id: 3, text: 'Learn form submission', done: false, isEdit: false }
  ])
  const [text, setText] = useState('') // controlled input

  function addTodo(e) {
    e.preventDefault() // event handling
    if (!text.trim()) return
    setTodos([...todos, { id: Date.now(), text, done: false, isEdit: false }])
    setText('')
  }

  function toggleTodo(id) {
    // never mutate state directly - always create a new array/object
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  function removeTodo(id) {
    setTodos(todos.filter((t) => t.id !== id))
  }

  function editTodo(id) {
	setTodos(todos.map((t) => (t.id === id ? {...t, isEdit: !t.isEdit} : t)))
  }

  function updateTodo(id, textVal) {
	setTodos(todos.map((t) => (t.id === id ? {...t, text: textVal} : t)))
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New todo..."
        />
        <button type="submit">Add</button>
      </form>

      {/* Conditional rendering */}
      {todos.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        <ul>
          {/* Lists + keys: key must be stable & unique, never array index if list reorders */}
          {todos.map((todo) => (
            <li key={todo.id}>
              <label style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(todo.id)}
                />
                {' '}
				{
					todo.isEdit ? (
						<input
						  value={todo.text}
						  onChange={(e) => updateTodo(todo.id, e.target.value)}
						/>
					) : (todo.text)
				}
				
				
              </label>{' '}
              <button onClick={() => removeTodo(todo.id)}>x</button>{' '}
			  <button onClick={() => editTodo(todo.id)}>{todo.isEdit ? 'Done' : 'Edit'}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList
