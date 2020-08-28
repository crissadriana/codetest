import React from 'react';
import PropTypes from 'prop-types';

import './Error.scss';

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <h2 className="error-message">{message}</h2>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
