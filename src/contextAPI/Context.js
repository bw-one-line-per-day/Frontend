import React, { useState } from 'react';

export const StoreContext = React.createContext({});

export const ContextProvider = props => {
  // Password should be removed when going live, this is just for ease of development
  const [userInfo, setUserInfo] = useState({
    id: null,
    username: 'chineek',
    password: '123344'
  });

  const context = { userInfo, setUserInfo };

  return (
    <StoreContext.Provider value={context}>
      {props.children}
    </StoreContext.Provider>
  );
};
