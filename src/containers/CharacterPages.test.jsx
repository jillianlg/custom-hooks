import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterPage from './CharacterPages';

describe('CharacterPages container', () => {
  it('displays a loading screen then a list of characters', () => {
    render(<CharacterPage />);
  });
});
