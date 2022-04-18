import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './pages/Header';
import Index from './pages/Index'
import Project from './pages/Project';
import {Routes, Route} from  'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App css-fondo">
      <Header/>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/project/:id' element={<Project/>} />
      </Routes>
    </div>
  )
}

export default App
