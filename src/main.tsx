import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GisfApp } from './GisfApp'
// import { CounterApp } from './counter/componets/counterApp'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GisfApp />
    {/* <CounterApp/> */}
  </StrictMode>,
)
