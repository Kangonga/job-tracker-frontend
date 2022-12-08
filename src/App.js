import './App.css';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  return (
    // < BrowserRouter >
    <>
      <NavBar user={user} setUser={setUser} />
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='dashboard/*' element={<Dashboard />} />
      
      </Routes>
      </>
  
  );
}

export default App;
