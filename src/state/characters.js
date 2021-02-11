import { useEffect, useState } from 'react';
import { findCharacterById, findCharacters } from '../services/RickAndMortyApi';

export const useCharacters = () => {
  const [loading, setLoading]  = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    findCharacters(page)
      .then(characters => {
        setCharacters(characters);
        setLoading(false);
      });
  }, [page]);

  return {
    loading,
    characters,
    page,
    setPage
  };
};

export const useCharacterById = id => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    findCharacterById(id)
      .then(character => {
        setCharacter(character);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    character
  };
};
