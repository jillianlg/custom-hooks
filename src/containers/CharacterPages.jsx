/* eslint-disable max-len */
import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';

import Loading from '../components/loading/Loading';
import { findCharacters } from '../services/RickAndMortyApi';

export default class CharacterPage extends Component {
  state = {
    loading: true,
    characters: []
  }

  componentDidMount() {
    findCharacters()
      .then(characters => {
        this.setState({ characters, loading: false });
      });
  }

  render() {
    const { loading, characters } = this.state;

    if(loading) return <Loading />;
    return (
      <CharacterList characters={characters} />
    );
  }

}
