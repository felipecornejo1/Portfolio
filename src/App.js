import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/css/style.css'
import { Home } from './sections/index'
import { Notifications } from './components/index'

// Roboto Font
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='App'>
      <Notifications />

      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
