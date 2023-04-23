import { useState } from 'react'
import './App.css'
import LogIn from './components/LogIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import AppRouter from './AppRouter';

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("dark")

  return (
      <AppRouter/>
    // <div className={`${theme}`}>
    //   <LogIn/>
    //   {/* <Navbar theme={theme} setTheme={setTheme}/> */}
    //   <div className='bg-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum possimus ut voluptatibus. Quibusdam nihil debitis consequatur ex, veniam, sed velit pariatur quaerat sequi iste porro sapiente dolores voluptatem, optio quam animi provident magnam. Accusamus autem nam quas. Necessitatibus dicta praesentium molestiae doloremque, dolores quas molestias voluptatum culpa veritatis minima qui!</div>
    //   <PostsContainer/>
    // </div>
  )
}

export default App
