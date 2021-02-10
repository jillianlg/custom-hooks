/* eslint-disable max-len */
import React, { Component } from 'react';
import CharacterDetail from '../components/details/CharacterDetails';
import Loading from '../components/loading/Loading';

export default class CharacterById extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
  }

  render() {
    const { loading } = this.state;

    if(loading) return <Loading />;
    return <CharacterDetail 
      name="Morty Smith"
      image="morty.url"
      status="Alive"
      species="Human"
    />;
  }
}
