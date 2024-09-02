import React from 'react';
import { ProfileProvider } from './ProfileContext';

const AppProvider = ({ children }) => {
  return <ProfileProvider>{children}</ProfileProvider>;
};

export default AppProvider;