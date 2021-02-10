/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../components/details/CharacterDetails';
import Loading from '../components/loading/Loading';
import { useCharacterById } from '../state/characters';

const CharacterById = ({ match }) => {
  const { loading, character } = useCharacterById(match.params.id);

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
