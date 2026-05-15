import { useState } from 'react';

function Register({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleRegister() {
    fetch('https://my-portfolio-green-nine-34.vercel.app/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        if (data.message === 'User registered successfully') {
          setTimeout(() => onSwitch(), 1500);
        }
      });
  }

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', textAlign: 'center' }}>
      <h2>Register</h2>
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
      <button onClick={handleRegister} style={{ padding: '10px 24px', cursor: 'pointer' }}>
        Register
      </button>
      <p>{message}</p>
      <p>Already have an account? <span onClick={onSwitch} style={{ color: '#2980b9', cursor: 'pointer' }}>Login here</span></p>
    </div>
  );
}

export default Register;