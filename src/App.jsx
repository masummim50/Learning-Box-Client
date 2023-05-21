import { useState } from 'react'
import './App.css'
import LogIn from './components/LogIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import AppRouter from './AppRouter';
import useAuthCheck from './hooks/useAuthCheck';

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("dark");
  const authCheck = useAuthCheck()

  return (
      !authCheck ? <div>Loading</div> : <AppRouter/>
  )
}

export default App
