import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faSquareFacebook, faApple, } from '@fortawesome/free-brands-svg-icons';
import img1 from '../../assets/images/img1.jpg'


const RegisterPage = () => {
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
    <div className='login-container'>
      <section className='img-section'>
        <img src={img1} alt="Logo" />
      </section>
      <section className='login-section'>
        <div>
          <p>Já tem uma conta?</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <h2>Cadastrar</h2>
        <form onSubmit={createUserAccount}>
        <label for="name">Name</label>
        <input type="text" name='name' placeholder="Name" value={email} onChange={(e) => setName(e.target.value)} required/>
          <label for="email">Email</label>
          <input type="text" name='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <label for="password">Senha</label>
          <input type="password" name='password' placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label for="confirmPassword">Confirme a senha</label>
          <input type="password" name='confirmPassword' placeholder="********" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <Link to="">Esqueci minha senha</Link>
          <button type="submit">Entrar</button>
        </form>
        <p>OU</p>
        <div className='buttons-login'>
          <button>
            <FontAwesomeIcon icon={faGoogle}/> Google
          </button>
          <button>
            <FontAwesomeIcon icon={faSquareFacebook}/> Facebook
          </button>
          <button>
            <FontAwesomeIcon icon={faApple}/> Apple
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default RegisterPage;
