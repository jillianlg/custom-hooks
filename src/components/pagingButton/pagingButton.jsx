import React from 'react';
import PropTypes from 'prop-types';
import styles from './pagingButton.css';

const PagingButton  = ({ page, setPage }) => {
  const handleIncrement = () => setPage(page + 1);
  const handleDecrement = () => setPage(page - 1);

  return (
    <div className={styles.pagingButton}>
      { 
        page === 1
          ?
          <>
            <span>Page {page}</span>
            <button onClick={handleIncrement}>Next</button>
          </>
          :
          <>
            <button onClick={handleDecrement}>Prev</button>
            <span>Page {page}</span>
            <button onClick={handleIncrement}>Next</button>
          </>
      }
    </div>
  );
};

PagingButton.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func
};

export default PagingButton;
