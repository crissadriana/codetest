import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Countries from './Countries';
import { getAllCountries } from '../api';

jest.mock('../api');

test('renders list of countries', async () => {
  getAllCountries.mockImplementation(() =>
    Promise.resolve([{ name: 'Scotland', alpha2Code: 'SCO' }])
  );
  const { getByTestId } = render(
    <Router>
      <Countries />
    </Router>
  );
  const countriesItemNode = await waitForElement(() => getByTestId('country-list'));
  expect(countriesItemNode.children).toHaveLength(1);
  expect(countriesItemNode.children[0].textContent).toBe('Scotland');
});
