import './LoginPage.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faSquareFacebook, faApple, } from '@fortawesome/free-brands-svg-icons';
import img1 from '../../assets/images/img1.jpg'



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('token', token);
      alert('Login successful');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className='login-container'>
      <section className='img-section'>
      <img src={img1} alt="Logo" />
      </section>
      <section className='login-section'>
        <div className='header-section'>
          <p>Não tem uma conta?</p>
          <Link to="/register">
            <button>Cadastrar</button>
          </Link>
        </div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input type="text" name='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <label for="password">Senha</label>
          <input type="password" name='password' placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Link to="">Esqueci minha senha</Link>
          <button type="submit">Entrar</button>
        </form>
        <p>OU</p>
        <div className='buttons-login'>
          <button>
            <FontAwesomeIcon icon={faGoogle} className='google-button'/> Google
          </button>
          <button>
            <FontAwesomeIcon icon={faSquareFacebook} className='facebook-button'/> Facebook
          </button>
          <button>
            <FontAwesomeIcon icon={faApple} className='apple-button'/> Apple
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default LoginPage;