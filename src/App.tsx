import React, { lazy, useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/auth/signin" element={<SignIn/>}/>
      <Route path="/auth/signup" element={<SignUp/>}/>
      <Route element={<DefaultLayout />}/>
    </Routes>
  );
}

export default App;
