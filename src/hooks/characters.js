import { useEffect, useState } from 'react';
import { findCharacters } from '../services/RickAndMortyApi';

export const useCharacters = () => {
  const [loading, setLoading]  = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    findCharacters()
      .then(characters => {
        setCharacters(characters);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    characters
  };
};
