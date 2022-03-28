import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import { createUserApi, loginApi } from '../helpers/fetchApi';

export default function RightLogin() {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { name, setName, token, setToken } = useContext(Context)
  const navigate = useNavigate();

  async function handleOnClick() {
    try {
      if (register) {
        const createUser = await createUserApi(name, email, password)  
        const data = await createUser.json();

        if (!data.token) {
          return alert(`Algo deu errado`);
        }
  
        alert('Usuário criado com sucesso');
        return setRegister(!register);
      }

      const api = await loginApi(email, password)
      const data = await api.json();

      if (!data.token) {
        return alert(`Erro ${api.status}: ${data.message}`)
      }
      setName(data.displayName);
      setToken(data.token);

      alert('Login efetuado com sucesso');
      navigate('/posts')

      return;
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="right-side-login">
      <h2 className="welcome">{ register === false ? 'Seja bem-vindo' : 'Digite os dados' }</h2>
      <div className="inputs">
      { register && (
          <>
            <label className="label-input" htmlFor="name">Nome</label>
            <input
              className="input-login-name"
              name="name"
              id="name"
              type="name"
              onChange={(e) => setName(e.target.value)} 
            />
          </>
        ) }
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
        { register ? 'Cadastrar' : 'Entrar' }
      </button>
      { !register && (
        <button 
          className="new-sign"
          type="button"
          onClick={ () => setRegister(!register) }
        >
          Cadastrar
        </button>
      ) }
    </div>
  )
}
