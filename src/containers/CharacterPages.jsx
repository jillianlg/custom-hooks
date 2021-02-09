/* eslint-disable max-len */
import React, { Component } from 'react';

export default class CharacterPage extends Component {
  state = {
    loading: true
  }
  render() {
    const { loading } = this.state;

    if(loading) return <img src="https://tenor.com/view/rick-and-morty-rest-and-ricklaxation-crying-sobbing-exhausted-gif-9601871" alt="loading" />;
    return (<h1>Character Page</h1>);
  }

}
