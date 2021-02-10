import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetail from './CharacterDetails';

describe('CharacterDetails component', () => {
  afterEach(() => cleanup());
  it('renders character data by id', () => {
    const { asFragment } = render(
      <CharacterDetail
        name="Morty Smith"
        image="morty-smith.url"
        status="Alive"
        species="Human"
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
