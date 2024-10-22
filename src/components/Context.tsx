import { createContext, useContext } from 'react';

import { User } from './AuthWrap';

export const AuthData = () => useContext (AuthContext);

export const AuthContext = createContext<User | undefined>(undefined);

export function useUserContext() {
  const user = useContext(AuthContext);

  if (user === undefined) {
    throw new Error('useUserContext must be used with a DashboardContext');
  }

  return user;
}