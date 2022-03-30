import React from 'react';
import RightLogin from '../components/RightLogin';
import LeftLogin from '../components/LeftLogin';
import '../style/login.css';

export default function Login() {
  return (
    <div className="container">
      <div className="main-div">
        <LeftLogin />
        <RightLogin />
      </div>
    </div>
  )
}
