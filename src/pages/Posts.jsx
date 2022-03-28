import React from 'react';
import Content from '../components/Content';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

export default function Post() {
  return (
    <>
      <Header />
      <div className="content">
        <Content />
        <SideBar />
      </div>
    </>
  )
}
