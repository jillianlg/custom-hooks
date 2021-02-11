import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterList from './CharacterList';
import { ThemeModeProvider } from '../../state/themeModeContext';

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders CharacterList', () => {
    const { asFragment } = render(
      <ThemeModeProvider>
        <MemoryRouter>
          <CharacterList 
            characters={[]} />
        </MemoryRouter>
      </ThemeModeProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
