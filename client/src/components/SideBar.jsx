import React from 'react';
import '../style/sidebar.css';

export default function SideBar() {
  return (
    <div className="side-bar">
      <div className="subscribe">
        <p className="side-text">Receba as atualizações e promoções por email</p>
        <input className="subscribe-input" placeholder="Digite seu email" />
        <button className="subscribe-btn" type="button">Inscreva-se</button>
      </div>
      <div className="subscribe-bottom">

      </div>
    </div>
  )
}
