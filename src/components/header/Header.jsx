import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../state/themeModeContext';
import styles from './Header.css';

function Header() {
  const { themeMode, setThemeMode } = useTheme();

  const toggle = ({ target }) => {
    if(target.checked) setThemeMode('dark');
    else (setThemeMode('light'));
  };

  return (
    <div className={`${styles.header} ${styles[themeMode]}`}>
      <h2>Rick and Morty</h2>   
      <div className={styles.nav}>
        <Link to="/">
          <p>Home</p>
        </Link>
        <div className={styles.toggle}>
          <input type="checkbox" onChange={toggle} />
          <span>Dark Mode</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
