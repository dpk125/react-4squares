import React from 'react';

const Button = (props) => {
  if (props.hidden) {
    return null;
  }

  return (
    <button
      className="btn btn-primary"
      onClick={() => props.click()}
    >
      {props.children}
    </button>
  );
};

export default Button;
