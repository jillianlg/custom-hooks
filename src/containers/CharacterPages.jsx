/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import Loading from '../components/loading/Loading';
import { useCharacters } from '../hooks/characters';
import { findCharacters } from '../services/RickAndMortyApi';

const CharacterPage = () => {
  const { loading, characters } = useCharacters();

  if(loading) return <Loading />;

  return <CharacterList characters={characters} />;

};

export default CharacterPage;
