import React from 'react';
import { Cart, Header, Controler, Overview } from './components/';
import './assets/styles/main.scss';

const App = ({
  racing,
  finished,
  activeTab,
  onTabChange,
  raceStared,
  socket,
  startTheRace
}) => {
  return (
    <Cart>
      <Header
        radicingAthletes={racing.length}
        finishedAthletes={finished.length}
      />
      <Controler
        active={activeTab}
        onTabChange={onTabChange}
        raceStared={raceStared}
        socketConnetction={!!socket}
        startTheRace={startTheRace}
      />
      <Overview
        visibilityFilter={activeTab}
        racing={racing}
        finished={finished}
      />
    </Cart>
  );
};

export default App;
