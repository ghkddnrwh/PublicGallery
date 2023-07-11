import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext(null);

export function UserContextProvider({children}) {
  const [user, setUser] = useState(null);

  return <UserContext.Provider children={children} value={{user, setUser}} />;
}

export default UserContext;

export function useUserContext() {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('UserContext.Provider is not found');
  }

  return userContext;
}
