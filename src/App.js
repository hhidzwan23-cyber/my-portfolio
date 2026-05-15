import { useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Login from './Login';
import Register from './Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  function handleLogout() {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  return (
    <div>
      <Header title="MyPortfolio" />
      {isLoggedIn ? (
        <div>
          <div style={{ textAlign: 'right', padding: '10px 20px' }}>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <TodoList />
        </div>
      ) : showRegister ? (
        <Register onSwitch={() => setShowRegister(false)} />
      ) : (
        <Login
          onLogin={() => setIsLoggedIn(true)}
          onSwitch={() => setShowRegister(true)}
        />
      )}
    </div>
  );
}

export default App;