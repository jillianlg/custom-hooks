import React from 'react';
import PropTypes from 'prop-types';

const pagingButton  = ({ page, setPage }) => {
  const handleIncrement = () => setPage(page + 1);
  const handleDecrement = () => setPage(page - 1);

  return (
    <div>
      <button onClick={handleDecrement}>Prev</button>
      <span>page {page}</span>
      <button onClick={handleIncrement}>Next</button>
    </div>
  );
};
