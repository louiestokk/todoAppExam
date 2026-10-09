import { useState } from 'react'
import { Grid } from '@mui/material'
import Button from '../components/Button'
import Todo from '../components/Todo'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/features/todoSlice'

function Home() {
  const dispatch = useDispatch()
  const [draft, setDraft] = useState("")
  const [todos, setTodos] = useState([])

  const handleChange = (event) => {
    setDraft(event.target.value)
  }

  const handleAdd = () => {
    const text = draft.trim()
    if (text === "") return

    const todo = { id: Date.now(), task: text, done: false }
    setTodos([...todos, todo])
    dispatch(addTodo(todo))
    setDraft("")
  }

  const handleDone = (id) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )))
  }

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id, newTodo) => {
    const current = todos.find((todo) => todo.id === id)
    if (!current) return

    const text = newTodo.trim()
    if (text === "") return

    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, task: text } : todo
    )))
  }

  return (
    <main>
      <section className="center" aria-labelledby="page-title">
        <h1 id="page-title">Todo App</h1>
        <p>Organize your day, stay focused, and never forget a to-do again.</p>
        <p className="counter">Todos for today {todos.length}</p>
      </section>

      <section className="add-section" aria-labelledby="add-todo-title">
        <h2 id="add-todo-title">Add your todos</h2>
        <div className="input-row">
          <label htmlFor="todo-input">Create new todo</label>
          <input
            id="todo-input"
            name="todo"
            value={draft}
            onChange={handleChange}
            type="text"
            placeholder="Describe your todo"
          />
          <Button
            type="button"
            styles="add-btn"
            handleClick={handleAdd}
            text="Add todo"
          />
        </div>
      </section>

      {todos.length > 0 && (
        <section id="todos" className="todo-section" aria-labelledby="todos-title">
          <h2 id="todos-title">Your todos</h2>
          <Grid container spacing={2}>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onToggleDone={handleDone}
                removeDone={handleRemove}
                handleUpdate={updateTodo}
              />
            ))}
          </Grid>
        </section>
      )}
    </main>
  )
}

export default Home
