/* eslint-disable max-len */
import React, { Component } from 'react';

export default class CharacterById extends Component {
  state = {
    loading: true,
  }

  render() {
    const { loading } = this.state;

    if(loading) return <img src="https://media.giphy.com/media/cLqtYAKCLI41ArIC48/giphy.gif" alt="loading" />;
    return <h1>Details Page</h1>;
   
  }
}
