/* eslint-disable max-len */
import React from 'react';
import CharacterList from '../components/characters/CharacterList';
import Loading from '../components/loading/Loading';
import { useCharacters } from '../hooks/characters';

const CharacterPage = () => {
  const { loading, characters } = useCharacters();

  if(loading) return <Loading />;

  return <CharacterList characters={characters} />;

};

export default CharacterPage;
