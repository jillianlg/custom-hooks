import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import CharacterPage from './CharacterPages';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json());
  })
);

describe('CharacterPages container', () => {
  it('displays a loading screen then a list of characters', async() => {
    render(
      <MemoryRouter>
        <CharacterPage />
      </MemoryRouter>
    );

    screen.getByAltText('loading');

    const listOfCharacters = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(listOfCharacters).not.toBeEmptyDOMElement();
    });
  });
});
