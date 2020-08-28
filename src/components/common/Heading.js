import React from 'react';
import PropTypes from 'prop-types';

import './Heading.scss';

const Heading = ({ label }) => {
  return <h3 className="heading">{label}</h3>;
};

Heading.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Heading;
