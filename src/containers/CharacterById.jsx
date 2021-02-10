/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../components/details/CharacterDetails';
import Loading from '../components/loading/Loading';
import { findCharacterById } from '../services/RickAndMortyApi';


export default class CharacterById extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }
  
  state = {
    loading: true,
    character: null
  }

  componentDidMount() {
    findCharacterById(this.props.match.params.id)
      .then(character => {
        this.setState({ character, loading: false });
      });
  }

  render() {
    const { loading, character } = this.state;

    if(loading) return <Loading />;
    return <CharacterDetail {...character} />;
  }
}
