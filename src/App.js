import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Post from './pages/Posts';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/posts" element={ <Post /> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
