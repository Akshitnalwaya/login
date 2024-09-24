import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'

import Login1 from './P/Login1'
import Signup1 from './P/Signup1'
import Home1 from './P/Home1'

export default function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login1/>}/>
        <Route path='/signup' element={<Signup1 />} />
        <Route path='/home' element={<Home1/>}/>
      </Routes>
    </div>
  )
}
