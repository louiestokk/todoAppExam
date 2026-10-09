import { Card, CardContent, Chip, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectTodos } from '../redux/features/todoSlice'

const MyTodos = () => {
  const todos = useSelector(selectTodos)
  return (
    <main>
      <section className="my-todos-hero" aria-labelledby="my-todos-title">
        <p className="my-todos-eyebrow">Your overview</p>
        <h1 id="my-todos-title">My todos</h1>
        <p>Keep track of every task you have added.</p>
        <p className="counter">{todos.length} {todos.length === 1 ? 'todo' : 'todos'}</p>
      </section>

      <section className="todo-section" aria-labelledby="my-todos-list-title">
        <h2 id="my-todos-list-title">All tasks</h2>

        {todos.length === 0 ? (
          <div className="empty-todos">
            <h3>No todos yet</h3>
            <p>Add a todo from the Home page and it will appear here.</p>
          </div>
        ) : (
          <Grid container spacing={2}>
            {todos.map((todo) => (
              <Grid key={todo.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  className="my-todo-card"
                  elevation={todo.done ? 0 : 3}
                  sx={{
                    bgcolor: todo.done ? 'success.light' : 'background.paper',
                    opacity: todo.done ? 0.7 : 1,
                  }}
                >
                  <CardContent>
                    <Chip
                      label={todo.done ? 'Completed' : 'To do'}
                      color={todo.done ? 'success' : 'primary'}
                      size="small"
                    />
                    <Typography
                      component="h3"
                      variant="h6"
                      sx={{
                        mt: 2,
                        wordBreak: 'break-word',
                        textDecoration: todo.done ? 'line-through' : 'none',
                      }}
                    >
                      {todo.task}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </section>
    </main>
  )
}

export default MyTodos