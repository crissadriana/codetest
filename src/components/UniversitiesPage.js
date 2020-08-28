import React from 'react';

import Universities from './Universities';
import Heading from './common/Heading';
import content from '../content.json';

const UniversitiesPage = () => {
  return (
    <>
      <Heading label={content.universities.title} />
      <Universities />
    </>
  );
};

export default UniversitiesPage;
