import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders CharacterList', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterList 
          characters={[]} />
      </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});