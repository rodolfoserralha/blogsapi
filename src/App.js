import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Posts from './pages/Posts';
import PostPage from './pages/Post';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/post/:id" element={ <PostPage /> } />
      <Route path="/post" element={ <Posts /> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
