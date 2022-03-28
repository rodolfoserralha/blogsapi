import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

export default function ContextProvider({ children }) {
  const [token, setToken] = useState('');
  const [name, setName] = useState('');

  const contextValue = {
    token, setToken, name, setName,
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