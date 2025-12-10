import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./assets/styles/Header.css"
import "./assets/styles/Banner.css"
import "./assets/styles/About.css"
import "./assets/styles/Dentists.css"
import "./assets/styles/Clinic.css"
import "./assets/styles/Footer.css"
import './globals.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
