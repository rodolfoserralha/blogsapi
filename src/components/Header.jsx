import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import '../style/header.css';

export default function Header(props) {
  const { name, setToken } = useContext(Context);
  const navigate = useNavigate();

  function logout() {
    setToken('');
    navigate('/');
    return;
  }

  return (
    <header>
      <p>{ `Olá ${name}`}</p>
      <button
        className="logout"
        onClick={ logout }
      >
        Sair
      </button>
    </header>
  )
}
