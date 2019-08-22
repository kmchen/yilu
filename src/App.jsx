import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Timeline, TimelineEvent } from 'react-event-timeline';

import Ground from './components/Ground';
import Takeoff from './components/TakeOff';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import convertDate from './util/util';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'rgb(255, 234, 234)',
    height: '100vh',
    fontFamily: 'Roboto',
    fontSize: 15,
  },
  timelineEvent: {
    display: 'inline-block',
  },
}));

export function AppComponent({ itinerary }) {
  const classes = useStyles();
  const timelineEvents = itinerary.map(val => {
    let child;
    switch (val.type) {
      case 'GROUND':
        child = <Ground address={val.origin.value} />;
        break;
      case 'AIRPORT':
        child = (
          <Takeoff airportName={val.origin.value} busynessIndex={val.detail.busyness_index} />
        );
        break;

      case 'FLIGHT':
        child = (
          <Landing
            origin={val.origin.value}
            destination={val.destination.value}
            boardingTime={val.detail.boarding}
            flightNumber={val.detail.flight_number}
            isOnTime={val.detail.boarding - val.departure < 0}
            seat={val.detail.gate}
            gate={val.detail.seat}
          />
        );
        break;
      default:
        return null;
    }
    return (
      <TimelineEvent
        title=""
        createdAt={convertDate(val.departure)}
        icon={<i className="material-icons md-18">album</i>}
        className={classes.timelineEvent}
        key={val.type}
      >
        {child}
      </TimelineEvent>
    );
  });
  return (
    <div className={classes.root}>
      <NavBar />
      <Timeline>{timelineEvents}</Timeline>
    </div>
  );
}

/* eslint-disable react/forbid-prop-types */
AppComponent.propTypes = {
  itinerary: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  const { itinerary } = state;
  return { itinerary };
};

export const App = connect(
  mapStateToProps,
  null,
)(AppComponent);
