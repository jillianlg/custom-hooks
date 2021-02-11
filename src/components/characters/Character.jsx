import React from 'react';
import PropTypes from 'prop-types';
import styles from './Characters.css';

const Character = ({ image, name }) => (
  <figure className={styles.character}>
    <img src={image} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Character;
