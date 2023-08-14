import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') !== null);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <h1>MyApp</h1>
      {loggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <div>
          <SignupForm />
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

export default App;
