import React, { useState } from 'react';
import Navbar from './Navbar';
import PostsContainer from './PostsContainer';

const Homepage = () => {
    
  const [theme, setTheme] = useState("dark")
    return (
        <div className={`${theme}`}>
            <Navbar theme={theme} setTheme={setTheme}/>
            <PostsContainer/>
        </div>
    );
};

export default Homepage;