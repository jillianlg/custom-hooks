/* eslint-disable max-len */
import React, { Component } from 'react';
import CharacterDetail from '../components/details/CharacterDetails';
import Loading from '../components/loading/Loading';

export default class CharacterById extends Component {
  state = {
    loading: true,
    character: null
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
  }

  render() {
    const { loading, character } = this.state;

    if(loading) return <Loading />;
    return <CharacterDetail {...character} />;
  }
}
