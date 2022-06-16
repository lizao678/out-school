import logo from './logo.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route index element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
