import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  async function createUserAccount(name, email, password, confirmPassword) {
    try {
      const response = await fetch('http://localhost:3000/users/create-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, confirmPassword })
      });
  
      const data = await response.json();
      console.log('Server response:', data);
      return data;
    } catch (error) {
      console.error('Error creating user account:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={createUserAccount}>
        <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Username" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
