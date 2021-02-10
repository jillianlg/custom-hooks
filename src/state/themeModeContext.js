import React, { createContext } from 'react';

const themeModeContext = createContext(null);

export const ThemeModeProvider = ({ children }) => {
  return (
    <themeModeContext.Provider value={{ }}>
      {children}
    </themeModeContext.Provider>
  );
};
