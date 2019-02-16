import React from 'react';
import styles from './controler.module.scss';
import PropTypes from 'prop-types';
import { Button, Loader } from '../';

const controler = ({
  onTabChange,
  active,
  raceStared,
  socketConnetction,
  startTheRace
}) => {
  return (
    <nav className={styles.controler}>
      <div className={styles.tabs}>
        <p onClick={() => onTabChange('all')} data-active={active === 'all'}>
          all results
        </p>
        <p
          onClick={() => onTabChange('racing')}
          data-active={active === 'racing'}
        >
          in the race
        </p>
        <p
          onClick={() => onTabChange('finished')}
          data-active={active === 'finished'}
        >
          finished
        </p>
      </div>
      <div>
        <div className="row start">
          {raceStared || !socketConnetction ? (
            <Loader />
          ) : (
            <Button onClick={startTheRace}>Start the race</Button>
          )}
        </div>
      </div>
    </nav>
  );
};

controler.propTypes = {
  onTabChange: PropTypes.func,
  active: PropTypes.string,
  raceStared: PropTypes.bool,
  socketConnetction: PropTypes.bool,
  startTheRace: PropTypes.func
};

export default controler;
