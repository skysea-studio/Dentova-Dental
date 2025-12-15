import { useEffect, useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Dentists from './components/Dentists'
import Clinic from './components/Clinic'
import Comments from './components/Comments'
import Services from './components/Services'
import ServiceSlider from './components/ServiceSlider'
import { AppointmentForm } from './components/AppointmentForm'
import Footer from './components/Footer'
import { GoogleMap } from './components/GoogleMap'


function App() {


  return (
    <>
      <Header />
      <div className='container'>
        <Banner />
        <About />
        <Dentists />
        <Clinic />
        <Comments />
        <Services />
        <ServiceSlider />
        <div className='form-map'>
          <AppointmentForm />
          <GoogleMap />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
