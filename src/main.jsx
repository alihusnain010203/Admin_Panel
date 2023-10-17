import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkmodeProvider } from './components/context/darkmodecontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkmodeProvider>
    <App /></DarkmodeProvider>
  </React.StrictMode>,
)
