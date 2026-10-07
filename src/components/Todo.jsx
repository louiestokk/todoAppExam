import React,{useState} from 'react';
import {Card, CardContent, CardActions, Typography, Button, Grid, Box, IconButton, TextField} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UndoIcon from '@mui/icons-material/Undo';
const Todo = ({todo,onToggleDone,removeDone,handleUpdate}) => {
  const [editTodo, setEditTodo] = useState(false)
  const [draft, setDraft] = useState("")
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card
        elevation={todo.done ? 0 : 3}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 3,
          opacity: todo.done ? 0.6 : 1,
          // ternary operator för att ändra opacity och backgrundsfärg med villkor todo.done alltså true då sätter vi opacity till 0.6 annars 1.0 och backgrundsfärg MUI success.light och background.paper
          bgcolor: todo.done ? 'success.light' : 'background.paper',
          transition: 'transform 0.2s, box-shadow 0.2s, opacity 0.3s, background-color 0.3s',
          '&:hover': { transform: 'translateY(-4px)', boxShadow: 8 },
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="overline" color="text.secondary">
            Todo: {todo.id}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',gap:"5px" }}>
            {editTodo ?  <TextField onChange={(e) => setDraft(e.target.value)} defaultValue={todo.task} id="outlined-basic" variant="outlined" /> :  <Typography
              variant="h6"
              component="div"
              sx={{ wordBreak: 'break-word', textDecoration: todo.done ? 'line-through' : 'none' }}
            >
              {todo.task}
            </Typography>}
            {editTodo ? <Button variant='contained' type='button' onClick={()=> {
              handleUpdate(todo.id,draft)
              setEditTodo(false)
            }}>Update</Button> : <IconButton onClick={() => setEditTodo(true)} size="small" aria-label="edit">
              <EditIcon />
            </IconButton>}
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
          <Button onClick={() => onToggleDone(todo.id)} size="small" variant="contained" color={todo.done ? "warning" : "success"} startIcon={todo.done ? <UndoIcon/>: <CheckCircleIcon />}>{todo.done ? "Undo":"Done"}</Button>
          <Button onClick={() => removeDone(todo.id)} size="small" variant="outlined" color="error" endIcon={<DeleteIcon />}>Remove</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Todo;