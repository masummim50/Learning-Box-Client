import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import LogIn from './components/LogIn'

createbr
const router = createBrowserRouter([
  {
    path:"/login",
    element: <LogIn/>
  },
  {
    path:"/home",
    element: <Homepage
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
