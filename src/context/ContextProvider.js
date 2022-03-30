import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

export default function ContextProvider({ children }) {
  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const [createPost, setCreatePost] = useState(false);
  const [posts, setPosts] = useState([]);

  const contextValue = {
    token, setToken, name, setName, createPost, setCreatePost, posts, setPosts
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};