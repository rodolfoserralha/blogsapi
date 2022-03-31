import React, { useState, useContext } from 'react';
import { createPostApi, getPosts } from '../helpers/fetchApi';
import Context from '../context/Context';
import '../style/createpost.css';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { token, createPost, setCreatePost, setPosts } = useContext(Context);

  async function handleClick(e) {
    e.preventDefault();
    const result = await createPostApi(token, title, content);

    if (result.id) {
      alert('Post cadastrado com sucesso');
      return getPosts(token, setPosts);
    }

    return;
  }

  return (
    <form className="create-post">
      <input
        placeholder="Título"
        onChange={({ target }) => setTitle(target.value)} 
      />
      <textarea 
        placeholder="Texto"
        rows="25"
        cols="70"
        type="text"
        onChange={({ target }) => setContent(target.value)}
      />
      <button 
        type="button"
        className="create-post-btn"
        onClick={ handleClick }
      >
        Criar
      </button>
      <button
        className="go-back"
        onClick={ () => setCreatePost(!createPost) }
      >
        Voltar
      </button>
    </form>
  )
}
