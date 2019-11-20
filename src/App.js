import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Masthead from './components/masthead'
import Contact from './components/contact'
import Footer from './components/footer'
import ForStudents from './components/for-students'

const App = () => {
  return (
    <>
      <Navbar />
      <Masthead />
      <ForStudents />
      <Contact />
      <Footer />
    </>
  )
}

export default App
