import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/styles/Header.css"
import "./assets/styles/Banner.css"
import "./assets/styles/About.css"
import "./assets/styles/Dentists.css"
import "./assets/styles/Clinic.css"
import "./assets/styles/Comments.css"
import "./assets/styles/Services.css"
import "./assets/styles/Footer.css"
import "./assets/styles/AppointmentForm.css"
import './globals.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
