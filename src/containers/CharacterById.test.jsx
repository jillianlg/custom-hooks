import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import characterByIdResponse from '../fixtures/CharacterById.json';
import CharacterById from './CharacterById';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/2', (req, res, ctx) => {
    return res(ctx.json(characterByIdResponse));
  })
);

describe('CharacterById container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays a characters details', async() => {
    render(<CharacterById match={{ params: { id: '2' } }} />);

    screen.getByAltText('loading');
    
    return waitFor(() => {
      screen.getByText('Morty Smith');
      screen.getByText('Human');
      screen.getByText('Alive');
    });
  });
});
