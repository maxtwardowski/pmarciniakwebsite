import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Masthead from './components/masthead'
import Contact from './components/contact'
import Footer from './components/footer'
import ForStudents from './components/for-students'
import OfficeHours from './components/office-hours'

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Masthead />
      <ForStudents />
      <OfficeHours />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
