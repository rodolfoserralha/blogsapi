import React, { useState } from 'react';

export default function RightLogin() {
  const [register, setRegister] = useState(false);

  return (
    <div className="right-side-login">
      <h2 className="welcome">Seja bem-vindo</h2>
      <div className="inputs">
        <label className="label-input" htmlFor="user">Usuário</label>
        <input className="input-login" id="user" type="text" />
      </div>
      <div className="inputs">
        <label className="label-input" htmlFor="password">Senha</label>
        <input className="input-login" id="password" type="text" />
      </div>
      <button 
        className="sign"
        type="button"
        onClick={ () => setRegister(!register) }
      >
        Entrar
      </button>
    </div>
  )
}
