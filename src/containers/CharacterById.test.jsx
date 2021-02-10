import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterById from './CharacterById';

describe('CharacterById container', () => {
  it('fetches and displays a list of character details', () => {
    render(<CharacterById />);

    screen.getByAltText('loading');

    return waitFor(() => {
      screen.getByText('Morty Smith');
      screen.getByText('Human');
      screen.getByText('Alive');
    });
  });
});
