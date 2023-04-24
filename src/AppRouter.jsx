import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import Homepage from './components/Homepage';
import AddPage from './components/AddPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/add-post" element={<AddPage/>}/>
      </Routes>
    </BrowserRouter>
    );
};

export default AppRouter;