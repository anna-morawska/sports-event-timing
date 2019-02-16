import React from 'react';
import PropTypes from 'prop-types';
import styles from './cart.module.scss';

const cart = ({ children }) => {
  return <main className={styles.cart}>{children}</main>;
};

cart.propTypes = {
  children: PropTypes.node
};

export default cart;
