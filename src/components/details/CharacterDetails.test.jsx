import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetail from './CharacterDetails';
import { ThemeModeProvider } from '../../state/themeModeContext';

describe('CharacterDetails component', () => {
  afterEach(() => cleanup());
  it('renders character data by id', () => {
    const { asFragment } = render(
      <ThemeModeProvider>
        <CharacterDetail
          name="Morty Smith"
          image="morty-smith.url"
          status="Alive"
          species="Human"
        />
      </ThemeModeProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
