import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Error from './common/Error';
import Heading from './common/Heading';
import { getAllCountries } from '../api';
import content from '../content.json';

import './Countries.scss';

const Countries = () => {
  const [error, setError] = useState(false);
  const [countries, setAllCountries] = useState([]);

  useEffect(() => {
    // when the component is mounted,
    // fetch the list of countries and set it to the state
    getAllCountries().then(setAllCountries).catch(setError);
  }, []);

  if (error) {
    return <Error message={content.countries.fetchError} />;
  }

  return (
    <>
      <Heading label={content.countries.title} />
      <ul data-testid="country-list" className="country-list">
        {countries.map((country) => (
          <li
            data-testid="country-list__item"
            className="country-list__item"
            key={country.alpha2Code}
          >
            <Link
              className="country-list__link"
              to={`/universities/${country.alpha2Code}/${country.name}`}
            >
              {country.name}
            </Link>
            <img
              src={`https://cdn.jsdelivr.net/npm/world_countries_lists@1.1.1/flags/24x24/${country.alpha2Code.toLowerCase()}.png?raw=true`}
              className="country-list__flag"
              alt=""
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Countries;
