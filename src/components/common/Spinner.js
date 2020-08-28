import React from 'react';

import './Spinner.scss';

const Spinner = () => {
  return (
    <svg
      className="svg-spinner"
      version="1.1"
      id="L4"
      x="0px"
      y="0px"
      viewBox="0 0 50 100"
      enableBackground="new 0 0 0 0"
      xmlSpace="preserve"
    >
      <circle fill="#222" stroke="none" cx="6" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle fill="#222" stroke="none" cx="26" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle fill="#222" stroke="none" cx="46" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
  );
};

export default Spinner;
