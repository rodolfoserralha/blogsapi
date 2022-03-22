import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RightLogin() {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const navigate = useNavigate();

  const headers = {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    "Content-Type": "application/json",
  };

  async function handleOnClick() {
    try {
      const api = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers,
        body: JSON.stringify({ email, password })
      });

      const data = await api.json();
      
      if (!data.token) {
        return alert(`Erro ${api.status}: ${data.message}`)
      }

      setToken(api.token)

      navigate('/user')

      return;
    } catch (error) {
      console.log(error)
      console.log(error)
    }
  }

  return (
    <div className="right-side-login">
      <h2 className="welcome">{ register === false ? 'Seja bem-vindo' : 'Digite os dados' }</h2>
      <div className="inputs">
        <label className="label-input" htmlFor="user">Usuário</label>
        <input
          className="input-login" 
          name="user" 
          id="user" 
          type="text" 
          onChange={ (e) => setEmail(e.target.value) }
        />
      </div>
      <div className="inputs">
        <label className="label-input" htmlFor="password">Senha</label>
        <input 
          className="input-login" 
          name="password" 
          id="password" 
          type="password" 
          onChange={ (e) => setPassword(e.target.value) }
        />
      </div>
      <button 
        className="sign"
        type="button"
        onClick={ handleOnClick }
      >
        { register === false ? 'Entrar' : 'Cadastrar' }
      </button>
    </div>
  )
}
