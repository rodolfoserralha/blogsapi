import React, { useEffect, useContext } from 'react';
import '../style/content.css';
import newPostIcon from '../../src/00268ae6757f9159e9e92d626897f95e.svg';
import { getPosts } from '../helpers/fetchApi';
import Context from '../context/Context';
import CreatePost from './CreatePost';
import { useNavigate } from 'react-router-dom';

export default function Content() {
  const { token, createPost, setCreatePost, posts, setPosts } = useContext(Context);

  const navigate = useNavigate();

  function handleOnClick() {
    setCreatePost(!createPost);
  }

  async function editPost(e) {
    navigate(`/post/${e.target.id}`)
  }

  useEffect(() => {
    getPosts(token, setPosts);
  }, [token, setPosts])

  return (
    <div className="left-content">
      <div className="posts-icon">
        <h1 className="posts-h1">Posts</h1>
        <button 
          className="btn-post" 
          type="button"
          onClick={ handleOnClick }
        >
          <img className="img-post" src={ newPostIcon } alt="post-icon" />
        </button>
      </div>
      <div className="posts">
        { !createPost ? posts && posts.map((p) => {
          return (
            <div className="posts-content" key={p.id}>
              <div>
                <h1>{ p.title }</h1>
                <p>{ p.content }</p>
              </div>
              <button 
                onClick={ editPost } 
                className="edit-btn" 
                type="button"
                id={ p.id }
              >
                Editar
              </button>
            </div>
          )
        }) : <CreatePost /> }
      </div>
    </div>
  )
}
