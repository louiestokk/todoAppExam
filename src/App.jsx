import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import HeaderComp from './components/HeaderComp'
import Home from './pages/Home'
import MyTodos from './pages/MyTodos'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <HeaderComp />
      <Routes>
        <Route  path="/" element={<Home />} />
         <Route path="/my-todos" element={<MyTodos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
