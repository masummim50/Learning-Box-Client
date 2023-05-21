import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import Homepage from './components/Homepage';
import AddPage from './components/AddPage';
import LayOut from './components/LayOut';
import PostsContainer from './components/PostsContainer';
import AddForm from './components/AddForm';
import AuthRequired from './AuthRequired';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path="/" element={<LayOut />}>
          <Route element={<AuthRequired />}>
            <Route index element={<PostsContainer />} />
            <Route path='add-post' element={<AddForm />} /></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;