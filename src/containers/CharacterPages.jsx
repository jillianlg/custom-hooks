/* eslint-disable max-len */
import React from 'react';
import CharacterList from '../components/characters/CharacterList';
import Loading from '../components/loading/Loading';
import PagingButton from '../components/pagingButton/pagingButton';
import { useCharacters } from '../state/characters';
import { useTheme } from '../state/themeModeContext';
import styles from '../components/characters/Characters.css';



const CharacterPage = () => {
  const { loading, characters, page, setPage } = useCharacters();
  const { themeMode } = useTheme();

  if(loading) return <Loading />;
  
  return (
    <div className={`${styles[themeMode]}`}>
      <PagingButton page={page} setPage={setPage} />
      <CharacterList characters={characters} />
    </div>
  );
};

export default CharacterPage;
