import './RegisterPage.css'
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
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  async function createUserAccount(e) {
    e.preventDefault();
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

      setMessage('Usuário criado com sucesso');
      setMessageType('success')
      setShowMessage(true);
      
      setTimeout(()=>{
      setShowMessage(false);
      }, 5000)

      return data;
    } catch (error) {
      setMessage(`Falha ao criar usuário: ${error}`, error)
      setMessageType('error')
      setShowMessage(true);
      
      setTimeout(()=>{
      setShowMessage(false);
      }, 5000)
      console.error('Error creating user account:', error);
    }

    
  };

  return (
    <div className='register-container'>
      <section className='img-section'>
        <img src={img1} alt="Logo" />
      </section>
      <section className='register-section'>
        <div className='header-section'>
          <p>Já tem uma conta?</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <h1>Cadastrar</h1>
        <form onSubmit={createUserAccount}>
        <label for="name">Nome</label>
        <input type="text" name='name' placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required/>
          <label for="email">Email</label>
          <input type="text" name='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <label for="password">Senha</label>
          <input type="password" name='password' placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label for="confirmPassword">Confirme a senha</label>
          <input type="password" name='confirmPassword' placeholder="********" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <button type="submit">Cadastrar</button>
        </form>
        <p>OU</p>
        <div className='buttons-register'>
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
      {showMessage && (
          <p className={`message ${messageType}`}>
            {message}
          </p>
        )}

        
    </div>
  );
};

export default RegisterPage;
