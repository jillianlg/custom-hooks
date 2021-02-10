/* eslint-disable max-len */
import React from 'react';
import CharacterList from '../components/characters/CharacterList';
import Loading from '../components/loading/Loading';
import PagingButton from '../components/pagingButton/pagingButton';
import { useCharacters } from '../hooks/characters';


const CharacterPage = () => {
  const { loading, characters, page, setPage } = useCharacters();

  if(loading) return <Loading />;

  return (
    <>
      <PagingButton page={page} setPage={setPage} />
      <CharacterList characters={characters} />
    </>
  );
};

export default CharacterPage;
