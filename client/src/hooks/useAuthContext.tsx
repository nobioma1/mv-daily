import { useContext } from 'react';

import AuthContext from 'contexts/AuthContext';

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext must be used within a AuthContextProvider');
  }

  return context;
}
