import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ active, backgroundColor, click }) => {
  return (
    <div className={active ? 'square active' : 'square'}>
      <button style={{backgroundColor}} onClick={() => click()} />
    </div>
  );
};

Square.propTypes = {
  active: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
};

export default Square;
