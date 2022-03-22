import React, { useState } from 'react';

function RightLogin() {
  const [register, setRegister] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleOnClick() {
    setRegister(!register)

    if (register === true) {
      alert('Usuário cadastrado com sucesso')
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
          onChange={ (e) => setUser(e.target.value) }
        />
      </div>
      <div className="inputs">
        <label className="label-input" htmlFor="password">Senha</label>
        <input 
          className="input-login" 
          name="password" 
          id="password" 
          type="text" 
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
