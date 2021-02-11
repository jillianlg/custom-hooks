import React, { createContext, useContext, useState } from 'react';

const themeModeContext = createContext(null);

export const ThemeModeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  return (
    <themeModeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </themeModeContext.Provider>
  );
};

export const useTheme = () => {
  const { themeMode, setThemeMode } = useContext(themeModeContext);
  
  return { themeMode, setThemeMode };
};
