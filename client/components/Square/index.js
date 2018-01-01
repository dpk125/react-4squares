import React from 'react';

const Square = ({ active, backgroundColor, click }) => {
  return (
    <div className={active ? 'square active' : 'square'}>
      <button style={{backgroundColor}} onClick={() => click()} />
    </div>
  );
};

export default Square;