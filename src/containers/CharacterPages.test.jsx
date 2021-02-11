import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import charactersApiResponse from '../fixtures/characters.json';
import CharacterPage from './CharacterPages';
import { ThemeModeProvider } from '../state/themeModeContext';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(charactersApiResponse));
  })
);

describe('CharacterPages container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('displays a loading screen then a list of characters', async() => {
    render(
      <ThemeModeProvider>
        <MemoryRouter>
          <CharacterPage />
        </MemoryRouter>
      </ThemeModeProvider>
    );

    screen.getByAltText('loading');

    const listOfCharacters = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(listOfCharacters).not.toBeEmptyDOMElement();
    });
  });
});
