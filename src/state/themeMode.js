import { useState } from 'react';

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState('lightTheme');

  const toggleTheme = () => {
    setThemeMode((prevState) => {
      if(prevState === "lightTheme") {
        return "darkTheme";
      } else {
        return "lightTheme";
      }
    });
  };

 
}
