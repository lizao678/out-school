import logo from './logo.svg'
import './App.css'
import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DotLoading, Mask } from 'antd-mobile'
import nullheader from '@/assets/nullheader.png'
import green from '@/assets/green.png'
import { useState } from 'react'


const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Login'))

function App() {
  const [preNum, setPreNum] = useState(0)
  useEffect(() => {
    const urlList = [
      nullheader,
      green
    ]
    const len = urlList.length
    for (let i = 0; i < len; i++) {
      const img = new Image()
      img.src = urlList[i]
      img.onload = img.onerror = () => {
        setPreNum(((i + 1) / len * 100))
      }
    }
    const timer = setTimeout(() => {
      if (preNum < 100) {
        setPreNum(100)
      }
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <BrowserRouter>
      <Mask visible={preNum !== 100} color='white' >
        < div
          style={{
            textAlign: 'center',
            marginTop: 200,
            color: '#07a',
            fontSize: '2.778vw',
            fontWeight: '500'
          }}
        >
          <span>Loading {preNum + '%'}</span>
          <DotLoading color='primary' />
        </div >
      </Mask>
      <Suspense
        fallback={
          < div
            style={{
              textAlign: 'center',
              marginTop: 200
            }}
          >
            <DotLoading color='primary' />
          </div >
        }
      >
        <div className='App'>
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route index element={<Login />}></Route>
          </Routes>
        </div>
      </Suspense>

    </BrowserRouter>

  )
}

export default App
