import './LoginPage.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faSquareFacebook, faApple, } from '@fortawesome/free-brands-svg-icons';
import img1 from '../../assets/images/img1.jpg'



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [showMessage, setShowMessage] = useState(false);

async function AuthenticateUser(e) {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3000/users/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password})
    });

    const data = await response.json();
    console.log('Server response:', data);

    setMessage("Login realizado com sucesso")
    setMessageType("sucess")
    setShowMessage(true);

    setTimeout(()=>{
    setShowMessage(false);
  }, 10000)

    return data;
  } catch (error) {
    setMessage(`Erro ao realizar login: ${error}`)
    setMessageType("error")
    setShowMessage(true);

    setTimeout(()=>{
    setShowMessage(false);
  }, 10000)
  
    console.error(`Error authenticating user: ${error}`);
  }

 
}



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
        <h1>Login</h1>
        <form onSubmit={AuthenticateUser}>
          <label for="email">Email</label>
          <input type="text" name='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <label for="password">Senha</label>
          <input className='password-input' type="password" name='password' placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Link to="">Esqueci minha senha</Link>
          <button type="submit">Entrar</button>
        </form>

        <div className='line'/>
        <p className='OU'>OU</p>
        <div className='line'/>
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
      {showMessage && (
          <p className={`message ${messageType}`}>
            {message}
          </p>
        )}
    </div>
  );
};

export default LoginPage;