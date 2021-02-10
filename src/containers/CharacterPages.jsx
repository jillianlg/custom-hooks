/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import Loading from '../components/loading/Loading';
import { findCharacters } from '../services/RickAndMortyApi';

const CharacterPage = () => {
  const [loading, setLoading]  = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    findCharacters()
      .then(characters => {
        setCharacters(characters);
        setLoading(false);
      });
  }, []);

  if(loading) return <Loading />;

  return <CharacterList characters={characters} />;

};

export default CharacterPage;
