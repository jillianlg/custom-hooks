import React from 'react';
import PropTypes from 'prop-types';
import styles from '../characters/Characters.css';
import { useTheme } from '../../state/themeModeContext';

const CharacterDetail = ({ image, name, status, species }) => {
  const { themeMode } = useTheme();

  return (
    <div className={`${styles[themeMode]}`} >
      <div className={styles.characterDetails} >
        <img src={image} alt={name} />
        <section>
          <p>{name}</p>
          <p>{status}</p>
          <p>{species}</p>
        </section>
      </div>
    </div>
  );
};

CharacterDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default CharacterDetail;
