import { useState } from 'react'
import './App.css'
import LogIn from './components/LogIn'
import Navbar from './components/Navbar'
import PostsContainer from './components/PostsContainer'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("")

  return (
    <div className={`${theme}`}>
      <LogIn/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <div className='bg-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum possimus ut voluptatibus. Quibusdam nihil debitis consequatur ex, veniam, sed velit pariatur quaerat sequi iste porro sapiente dolores voluptatem, optio quam animi provident magnam. Accusamus autem nam quas. Necessitatibus dicta praesentium molestiae doloremque, dolores quas molestias voluptatum culpa veritatis minima qui!</div>
      <PostsContainer/>
    </div>
  )
}

export default App
