import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GisfApp } from './GisfApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GisfApp />
  </StrictMode>,
)
