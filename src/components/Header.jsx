import React, { useContext } from 'react';
import Context from '../context/Context';
import '../style/header.css';

export default function Header(props) {
  const { name } = useContext(Context)

  return (
    <header>
      <p>{ `Olá ${name}`}</p>
      <button className="logout">Sair</button>
    </header>
  )
}
