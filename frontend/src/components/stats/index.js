import React from 'react';
import styles from './stats.module.scss';
import PropTypes from 'prop-types';
import { ReactComponent as RacingFlag } from '../../assets/images/racing-flag.svg';
import { ReactComponent as Countdown } from '../../assets/images/countdown.svg';

const stats = ({ radicingAthletes, finishedAthletes }) => {
  return (
    <section id="statistics" className={styles.stats}>
      <div>
        <Countdown className={styles.icon} /> IN THE RACE:
        <span>{radicingAthletes}/20</span>
      </div>
      <div>
        <RacingFlag className={styles.icon} /> FINISHED:
        <span>{finishedAthletes}/20</span>
      </div>
    </section>
  );
};

stats.propTypes = {
  finishedAthletes: PropTypes.number,
  radicingAthletes: PropTypes.number
};

export default stats;
