import { useState } from 'react';

function Login({ onLogin, onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleLogin() {
  fetch('https://my-portfolio-green-nine-34.vercel.app/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
    .then((res) => res.json())
    .then((data) => {
      setMessage(data.message);
      if (data.token) {
        localStorage.setItem('token', data.token);
        onLogin();
      }
    });
}

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', textAlign: 'center' }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <button onClick={handleLogin} style={{ padding: '10px 24px', cursor: 'pointer' }}>
        Login
      </button>
      <p>{message}</p>
      <p>No account? <span onClick={onSwitch} style={{ color: '#2980b9', cursor: 'pointer' }}>Register here</span></p>
    </div>
  );
}

export default Login;