import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss';
import logo from '../../assets/images/moonlogo.png';
import { Stats } from '../';

const header = ({ radicingAthletes, finishedAthletes }) => {
  return (
    <header id="header" className={styles.header}>
      <img alt="logo" className={styles.logo} src={logo} />
      <h1>Ranking Overview</h1>
      <Stats
        radicingAthletes={radicingAthletes}
        finishedAthletes={finishedAthletes}
      />
    </header>
  );
};

header.propTypes = {
  radicingAthletes: PropTypes.number,
  finishedAthletes: PropTypes.number
};

export default header;
