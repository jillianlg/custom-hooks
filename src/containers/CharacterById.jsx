/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../components/details/CharacterDetails';
import Loading from '../components/loading/Loading';
import { findCharacterById } from '../services/RickAndMortyApi';
import { useCharacterById } from '../hooks/characters';

const CharacterById = ({ match }) => {
  const { loading, character } = useCharacterById(match.params.id);
  // const [loading, setLoading] = useState(true);
  // const [character, setCharacter] = useState(null);

  // useEffect(() => {
  //   findCharacterById(match.params.id)
  //     .then(character => {
  //       setCharacter(character);
  //       setLoading(false);
  //     });
  // }, []);

  if(loading) return <Loading />;
  return <CharacterDetail {...character} />;
};

CharacterById.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterById;
