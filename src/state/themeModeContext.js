import React, { createContext } from 'react';
import Loading from '../components/loading/Loading';

const themeModeContext = createContext(null);

export const ThemeModeProvider = ({ children }) => {
  const { loading, themeMode } = useTheme();

  return (
    <themeModeContext.Provider value={{ children }}>
      {loading ? <Loading /> : children}
    </themeModeContext.Provider>
  );
};
