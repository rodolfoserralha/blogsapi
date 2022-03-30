import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../context/Context';
import { getPostById } from '../helpers/fetchApi';

export default function Post() {
  const { token } = useContext(Context);
  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(post.title);
  const { id } = useParams();

  useEffect(() => {
    getPostById(token, setPost, id);
    if (post.title) {
      setTitle(post.title);
      setContent(post.content)
    }
  }, [id, token, post.title, post.content])
  
  return (
    <>
      <div>
        { post && (
          <>
            <input onChange={e => setTitle(e.target.value)} value={ title } />
            <textarea
              onChange={e => setContent(e.target.value)}
              rows="25"
              cols="70"
              value={ content }
            />
          </>
        ) }        
      </div>
    </>
  )
}
