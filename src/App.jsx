import { useState } from 'react'
import Button from './components/Button'
import Footer from './components/Footer'
import HeaderComp from './components/HeaderComp'
import Todo from './components/Todo'
import { Grid } from '@mui/material'
import './App.css'

function App() {
  const [draft, setDraft] = useState("")
  const [todos, setTodos] = useState([
    {
      id:101,
      task:"Tvätta Kläder",
      done:false
    }
  ])

  const handleChange = (e) => {
   setDraft(e.target.value)
  }

  const handleAdd = () => {
    const text = draft.trim()
    if(text === "") return
    setTodos([...todos, {id: Date.now(), task:text}])
    setDraft("")
  }

  return (
    <>    
    <HeaderComp />
    <main>
   <section id="center">
          <h1>Todo App</h1>
          <p>Organize your day, stay focused, and never forget a to-do again.</p>
          <Button type="button" styles="counter" handleClick={() => {}} text={`Todos for today ${todos.length}`} />
      </section>
      <section className="add-section">
        <h2>
          Add your todos 
        </h2>
        <div className="input-row">
          <label htmlFor="todo-input">Create new todo</label>
          <input id="todo-input" name="todo" value={draft} onChange={handleChange} type='text' placeholder='Describe your todo'/>
          <Button type="button" styles="add-btn" handleClick={handleAdd} text="Add todo"/>
        </div>
      </section>
      {todos.length>0 && <section className="todo-section">
        <Grid container spacing={2}>
          {todos.map((todo)=> (
            <Todo key={todo.id} todo={todo}/>
          ))}
        </Grid>
      </section>}
    </main>
    <Footer />
    </>
  )
}

export default App
