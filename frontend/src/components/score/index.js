import React from 'react';
import PropTypes from 'prop-types';
import styles from './score.module.scss';

const score = ({ name, finishTime, nr, rank }) => {
  return (
    <div className={styles.row}>
      <span className={styles.rank}>{rank ? rank : '-'}</span>
      <span className={styles.name}>{name}</span>
      <span className={styles.startNr}>{nr}</span>
      <span className={styles.time}>
        {finishTime ? finishTime : <p className={styles.loading} />}
      </span>
    </div>
  );
};

score.propTypes = {
  name: PropTypes.string,
  finishTime: PropTypes.string,
  nr: PropTypes.number,
  rank: PropTypes.number
};

export default score;
