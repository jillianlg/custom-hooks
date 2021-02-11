/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';
import styles from './Characters.css';
import { useTheme } from '../../state/themeModeContext';

const CharacterList = ({ characters }) => {
  const { themeMode } = useTheme();

  const characterElements = characters.map(character => (
    <div key={character.id}>
      <Link to={`/characters/${character.id}`}>
        <Character image={character.image} name={character.name} />
      </Link>
    </div>
  ));

  return (
    <div className={`${styles.characterList} ${styles[themeMode]}` } data-testid="characters">
      {characterElements}
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;
