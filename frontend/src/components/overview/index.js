import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { substractTime } from '../../utils';
import { Score } from '../';
import styles from './overview.module.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

const overview = ({ racing = [], finished = [], visibilityFilter }) => {
  return (
    <section id="score-overview" className={styles.overview}>
      <div className={styles.header}>
        <p>rank</p>
        <p>name</p>
        <p>nr</p>
        <p>finish time</p>
      </div>
      <hr />
      <div className={styles.scoresContainer}>
        <PerfectScrollbar>
          <div className={styles.table}>
            {(visibilityFilter === 'all' || visibilityFilter === 'racing') && (
              <TransitionGroup>
                {racing.map(score => {
                  return (
                    <CSSTransition
                      unmountOnExit
                      key={score.chipId}
                      timeout={500}
                      classNames="fade"
                    >
                      <Score
                        name={score.name}
                        start={score.enter}
                        nr={score.startNr}
                      />
                    </CSSTransition>
                  );
                })}
              </TransitionGroup>
            )}
            {(visibilityFilter === 'all' ||
              visibilityFilter === 'finished') && (
              <TransitionGroup>
                {finished.map((score, index) => {
                  const finishTime = substractTime(score.finish, score.enter);
                  return (
                    <CSSTransition
                      mountOnEnter
                      unmountOnExit
                      key={score.chipId + score.__v}
                      timeout={(500, 0)}
                      classNames="fade"
                    >
                      <Score
                        name={score.name}
                        start={score.enter}
                        finishTime={finishTime}
                        nr={score.startNr}
                        rank={index + 1}
                      />
                    </CSSTransition>
                  );
                })}
              </TransitionGroup>
            )}
          </div>
        </PerfectScrollbar>
      </div>
    </section>
  );
};

overview.propTypes = {
  racing: PropTypes.array,
  finished: PropTypes.array,
  caclulateFinishTime: PropTypes.func
};

export default overview;
