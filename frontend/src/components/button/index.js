import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const button = ({ onClick, children }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default button;
