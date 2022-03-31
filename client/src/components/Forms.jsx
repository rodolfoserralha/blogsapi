import React from 'react'

export default function Forms() {
  return (
    <>
    <div className="inputs">
      { register && (
        <>
          <label className="label-input" htmlFor="name">Nome</label>
          <input
            className="input-login-name"
            name="name"
            id="name"
            type="name"
            onChange={(e) => setName(e.target.value)} />
        </>
      )}
      <label className="label-input" htmlFor="user">Usuário</label>
      <input
        className="input-login"
        name="user"
        id="user"
        type="text"
        onChange={(e) => setEmail(e.target.value)} />
    </div><div className="inputs">
        <label className="label-input" htmlFor="password">Senha</label>
        <input
          className="input-login"
          name="password"
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)} />
        <button
          className="sign"
          type="button"
          onClick={handleOnClick}
        >
          Entrar
        </button>
        <button
          className="new-sign"
          type="button"
          onClick={() => setRegister(!register)}
        >
          Cadastrar
        </button>
      </div>
    </>
  )
}
