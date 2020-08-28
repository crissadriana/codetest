import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Error from './common/Error';
import Spinner from './common/Spinner';
// eslint-disable-next-line no-unused-vars
import { getUniversitiesForCountry, getAllUniversities } from '../api';
import content from '../content.json';
import './Universities.scss';

const Universities = () => {
  const { alpha2Code, country } = useParams();
  const [error, setError] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    // when the component is mounted,
    // fetch the list of universities and set it to the state

    // Option 1: Use the hipo api to search for a specific country
    // doesn't work if country name has multiple words
    // getUniversitiesForCountry((country || '').toLowerCase())
    //   .then((listOfUniversities) => {
    //     setUniversities(listOfUniversities);
    //     setHasFetched(true);
    //   })
    //   .catch(setError);

    // Option 2: Fetch all countries and filter them by alpha2Code
    // It loads more data initially but it works for all countries
    getAllUniversities()
      .then((listOfUniversities) => {
        const universitiesForCountry = listOfUniversities.filter(
          (university) => university.alpha_two_code.toLowerCase() === alpha2Code.toLowerCase()
        );
        setUniversities(universitiesForCountry);
        setHasFetched(true);
      })
      .catch(setError);
  }, [alpha2Code, country]);

  if (error) {
    return <Error message={content.universities.fetchError} />;
  }

  if (!hasFetched) {
    return (
      <div className="spinner-wrapper">
        <Spinner />
      </div>
    );
  }

  if (universities.length === 0) {
    return (
      <div className="university-message-wrapper">
        <h4 className="university-message">
          {content.universities.noData} {country}
        </h4>
      </div>
    );
  }

  return (
    <ul data-testid="university-list" className="university-list">
      {universities.map((university) => (
        <li
          data-testid="university-list__item"
          className="university-list__item"
          key={university.name}
        >
          <a
            href={university.web_pages[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="university-list__link"
          >
            {university.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Universities;
