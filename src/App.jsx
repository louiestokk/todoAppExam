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
    setTodos([...todos, {id: Date.now(), task:text, done:false}])
    setDraft("")
  }
  // ES6 syntax arrow function
  const handleDone = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, done:!todo.done}: todo))
  }

  const handleRemove = (id) => {
    setTodos(todos?.filter((todo)=> todo.id !== id))
    // todos?.filter anvands for att inte fa errors om vi inte far todos arrayn
    // vad den gor ar att vi sager om vi har todos da kan vi filtrera
    // men i detta projet har vi definerat todos sa igentligen behovs det inte
    // vill bara visa kunskap 
  }

  const updateTodo = (id,newTodo) => {
    const current = todos.find((todo) => todo.id === id)
    if(!current) return
    const text = newTodo.trim()
    if(text === "") return
    setTodos(todos.map((todo) => todo.id === id ? {...todo, task:text} : todo))
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
      {/*  conditional rendering med villkor att längden på todos arrayn är längre/större än 0 och uppfylls villkoret renderar vi section med grid container. I grid containern mapar vi över todos arrayn och retunerar en component Todo med props och i Todo componenten retunerar vi en grid item. */}
      {todos.length>0 && <section className="todo-section">
        <Grid container spacing={2}>
          {todos.map((todo)=> (
            <Todo key={todo.id} todo={todo} onToggleDone={handleDone} removeDone={handleRemove} handleUpdate={updateTodo}/>
          ))}
        </Grid>
      </section>}
    </main>
    <Footer />
    </>
  )
}

export default App
