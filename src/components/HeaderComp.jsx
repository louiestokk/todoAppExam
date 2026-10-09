import { NavLink } from 'react-router-dom'
import heroImg from '../assets/hero.png'
import {IconButton} from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const HeaderComp = () => {
  return (
    <header>      
      <img src={heroImg} alt="Todo App hero" />
      <nav aria-label="Main navigation">
        <ul className="nav-list">
          <li><a className="nav-link" href="/">Home</a></li>
          <li><a className="nav-link" href="#todos">Todos</a></li>
          <li>
            <IconButton
              component={NavLink}
              to="/my-todos"
              size="small"
              aria-label="my todos"
              sx={{ p: 1 }}
            >
              <AccountCircleIcon  sx={{fontSize: 25, color: '#aa3bff', '&:hover': {color: 'rgba(170, 59, 255, 0.5)'}}}/>
            </IconButton>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComp