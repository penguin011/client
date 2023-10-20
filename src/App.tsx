import React, {lazy} from 'react';
import './App.css';
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
function App() {
  return (
    <div className="App">
       <DefaultLayout/>
    </div>
  );
}

export default App;
