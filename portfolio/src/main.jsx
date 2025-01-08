import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import './counter.jsx'
import './counterApp.css'
// import P1 from './port.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>

  </StrictMode>,
)
