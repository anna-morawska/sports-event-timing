import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { socketEndpoint } from '../config';
import { socketConnected } from '../actions/socket.actions';
import { setVisibilityFilter } from '../actions/visibilityFilter.actions';
import {
  raceStarted,
  raceFinished,
  updateScoresTable,
  addNewScore
} from '../actions/scores.actions';
import App from '../App';

class AppContainer extends Component {
  componentDidMount = () => {
    this.initSocket();
  };

  initSocket = () => {
    const socket = io(socketEndpoint);

    socket.on('connect', () => {
      this.props.socketConnected(socket);
      this.onWindowVisibilityChange(socket);
    });

    socket.on('raceStart', () => this.props.raceStarted());
    socket.on('raceFinish', () => this.props.raceFinished());
    socket.on('currentData', (currentData, raceStared) =>
      this.props.updateScoresTable(currentData, raceStared)
    );
    socket.on('realTimeData', newScore => this.props.addNewScore(newScore));
  };

  onWindowVisibilityChange = socket => {
    window.addEventListener('blur', () => {
      socket.close();
    });

    window.addEventListener('focus', () => {
      socket.connect();
    });
  };

  startTheRace = () => {
    const { socket } = this.props.socket;
    socket.emit('start');
  };

  render() {
    // startTheRace,
    // substractTime
    const {
      scores,
      visibilityFilter,
      setVisibilityFilter,
      socket
    } = this.props;

    return (
      <App
        racing={scores.racing}
        finished={scores.finished}
        activeTab={visibilityFilter.activeTab}
        onTabChange={setVisibilityFilter}
        raceStared={scores.raceStarted}
        startTheRace={this.startTheRace}
        socket={socket.socket}
      />
    );
  }
}

const mapStateToProps = state => ({
  scores: state.scores,
  visibilityFilter: state.visibilityFilter,
  socket: state.socket
});

const mapDispatchToProps = {
  socketConnected,
  setVisibilityFilter,
  raceStarted,
  raceFinished,
  updateScoresTable,
  addNewScore
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
