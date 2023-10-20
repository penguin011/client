import React, { lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
<<<<<<< Updated upstream
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
function App() {
  return (
    <Routes>
      <Route path="/auth/signin" element={<SignIn/>}/>
      <Route path="/auth/signup" element={<SignUp/>}/>
      <Route element={<DefaultLayout />}/>
    </Routes>
=======
import Loader from './common/Loader';
import { Toaster } from 'react-hot-toast';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route element={<DefaultLayout />} />
      </Routes>
    </>
>>>>>>> Stashed changes
  );
}

export default App;
