import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles/Login.css';
import { useAuth } from '../AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const history = useHistory();
  const { login } = useAuth();

  const handleLogin = () => {
    if (username === 'azteca' && password === '12345') {
      login();
      history.push('/form');
    } else {
      setAttempts((prevAttempts) => prevAttempts + 1);
      setUsername(''); 
      setPassword(''); 
      setErrorMessage('Usuario o contraseña incorrectos');
      
      if (attempts >= 2) {
        setIsButtonDisabled(true);
        setErrorMessage('Has excedido el número de intentos.');
      }
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        id="loginButton"
        onClick={handleLogin}
        disabled={isButtonDisabled}
        className={isButtonDisabled ? 'disabled-button' : ''}
      >
        Enviar
      </button>
      {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Login;
