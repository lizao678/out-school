import logo from './logo.svg'
import './App.css'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DotLoading } from 'antd-mobile'


const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Login'))


function App() {
  return (
    <BrowserRouter>
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
