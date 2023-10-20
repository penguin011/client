import React, { lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
function App() {
  return (
    <Routes>
      <Route path="/auth/signin" element={<SignIn/>}/>
      <Route path="/auth/signup" element={<SignUp/>}/>
      <Route element={<DefaultLayout />}/>
    </Routes>
  );
}

export default App;
