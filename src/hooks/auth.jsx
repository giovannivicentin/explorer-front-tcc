import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { api } from '../service/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@foodExplorer:user', JSON.stringify(user));
      localStorage.setItem('@foodExplorer:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível entrar.');
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@foodExplorer:token');
    localStorage.removeItem('@foodExplorer:user');
    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem('@foodExplorer:token');
    const user = localStorage.getItem('@foodExplorer:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider };
