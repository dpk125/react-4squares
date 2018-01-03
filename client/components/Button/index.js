import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ hidden, click, children }) => {
  if (hidden) {
    return null;
  }

  return (
    <button
      className="btn btn-primary"
      onClick={() => click()}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  hidden: PropTypes.bool,
  click: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Button;
