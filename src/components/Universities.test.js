import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Universities from './Universities';
import { getUniversitiesForCountry } from '../api';

jest.mock('../api');

test('renders list of universities', async () => {
  getUniversitiesForCountry.mockImplementation(() =>
    Promise.resolve([
      { name: 'Napier', web_pages: [] },
      { name: 'University of Edinburgh', web_pages: [] },
    ])
  );
  const { getByTestId } = render(
    <Router>
      <Universities />
    </Router>
  );
  const universitiesItemNode = await waitForElement(() => getByTestId('university-list'));
  expect(universitiesItemNode.children).toHaveLength(2);
  expect(universitiesItemNode.children[0].textContent).toBe('Napier');
  expect(universitiesItemNode.children[1].textContent).toBe('University of Edinburgh');
});
