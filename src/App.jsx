import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import MainDate from './components/MainDate'
import Green from './components/Green'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <MainDate />
      <Green />
      <Footer />
    </div>
  )
}

export default App
