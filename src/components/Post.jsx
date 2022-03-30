import React, { useContext, useState } from 'react';
import '../style/post.css';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Context from '../context/Context';
import { deletePostApi, getPostById, updatePostApi } from '../helpers/fetchApi';

export default function Post() {
  const { token } = useContext(Context);
  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(post.title);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPostById(token, setPost, id);
    if (post.title) {
      setTitle(post.title);
      setContent(post.content)
    }
  }, [id, token, post.title, post.content])
  
  async function updatePost() {
    const result = await updatePostApi(token, id, title, content);

    if (result.message) return alert(result.message)
    if (!result.userId) return alert('Algo deu errado');

    return alert(`Post número: ${id} atualizado com sucesso`);
  }

  function goback() {
    return navigate('/post')
  }

  async function deletePost() {
    const result = await deletePostApi(token, id);

    if(!result.ok) {
      console.log(result);
      return alert(`Erro: ${result.status} ${result.statusText}`);
     }
  
    alert('Post excluído com sucesso')

    return navigate('/post');
  }

  return (
    <>
      <div className="main-post">
        { post && (
          <>
            <input onChange={e => setTitle(e.target.value)} value={ title } />
            <textarea
              onChange={e => setContent(e.target.value)}
              rows="25"
              cols="70"
              value={ content }
            />
            <button
              className="confirm"
              type="text"
              onClick={ () => updatePost(token, id, title, content) }
            >
              Confirmar alteração
            </button>
            <button
              onClick={ deletePost }
              className="exclude-btn" 
              type="text"
            >
              Excluir post
            </button>
            <button
              className="go-back"
              type="text"
              onClick={ goback }
            >
              Voltar
            </button>
          </>
        ) }        
      </div>
    </>
  )
}
