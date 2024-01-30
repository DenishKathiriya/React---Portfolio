import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Projects from './Projects'
import Contact from './Contact'
import AllContant from './AllContant'

export default function ReactRouter() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllContant />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}
