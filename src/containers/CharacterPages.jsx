/* eslint-disable max-len */
import React, { Component } from 'react';
import CharacterList from '../components/CharacterList';
import { findCharacters } from '../services/RickAndMortyApi';

export default class CharacterPage extends Component {
  state = {
    loading: true,
    characters: []
  }

  componentDidMount() {
    findCharacters()
      .then(characters => {
        this.setState({ characters, loading: false })
      });
  }

  render() {
    const { loading, characters } = this.state;

    if(loading) return <img src="https://media.giphy.com/media/cLqtYAKCLI41ArIC48/giphy.gif" alt="loading" />;
    return (
      <CharacterList characters={characters} />
    );
  }

}
