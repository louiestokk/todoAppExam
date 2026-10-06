import {Card, CardContent, CardActions, Typography, Button, Grid} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UndoIcon from '@mui/icons-material/Undo';
const Todo = ({todo,onToggleDone}) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card
        elevation={3}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 3,
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': { transform: 'translateY(-4px)', boxShadow: 8 },
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="overline" color="text.secondary">
            Todo
          </Typography>
          <Typography className={todo.done && "todo-done"} variant="h6" component="div" sx={{ wordBreak: 'break-word' }}>
            {todo.task}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
          <Button onClick={() => onToggleDone(todo.id)} size="small" variant="contained" color={todo.done ? "warning" : "success"} startIcon={todo.done ? <UndoIcon/>: <CheckCircleIcon />}>{todo.done ? "Undo":"Done"}</Button>
          <Button size="small" variant="outlined" color="error" endIcon={<DeleteIcon />}>Remove</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Todo;