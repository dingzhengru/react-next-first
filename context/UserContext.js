import React from 'react';

export const user = {
  isLoggedIn: false,
  info: {},
};

export const UserContext = React.createContext(user);
