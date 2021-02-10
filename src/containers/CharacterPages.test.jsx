import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterPage from './CharacterPages';

describe('CharacterPages container', () => {
  it('displays a loading screen then a list of characters', async() => {
    render(<CharacterPage />);

    screen.getByAltText('loading');

    const listOfCharacters = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(listOfCharacters).not.toBeEmptyDOMElement();
    });
  });
});
