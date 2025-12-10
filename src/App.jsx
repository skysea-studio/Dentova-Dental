import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Dentists from './components/Dentists'
import Clinic from './components/Clinic'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Header />
      <div className='container'>
        <Banner />
        <About />
        <Dentists />
        <Clinic />
        <Footer />
      </div>
    </>
  )
}

export default App
