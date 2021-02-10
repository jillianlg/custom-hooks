/* eslint-disable max-len */
import React, { Component } from 'react';
import Loading from '../components/loading/Loading';

export default class CharacterById extends Component {
  state = {
    loading: true,
  }

  render() {
    const { loading } = this.state;

    if(loading) return <Loading />;
    return <h1>Details Page</h1>;
  }
}
