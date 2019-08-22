import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red, green, blue } from '@material-ui/core/colors';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import convertDate from '../util/util';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    borderLeft: '#ddd',
  },
  onTime: {
    color: green[500],
  },
  boardingTime: {
    color: blue[800],
  },
  landingIcon: {
    backgroundColor: red[500],
  },
  box: {
    margin: 'auto',
  },
}));

export default function Landing({
  origin,
  destination,
  gate,
  seat,
  isOnTime,
  boardingTime,
  flightNumber,
}) {
  const classes = useStyles();
  const flightStatus = isOnTime ? 'onTime' : 'Delay';
  const flightStatusStyle = isOnTime ? classes.onTime : '';
  return (
    <Paper className={classes.root} square elevation={0}>
      <Box display="flex" justifyContent="space-between">
        <Typography>{flightNumber}</Typography>
        <Typography className={classes.boardingTime}>{convertDate(boardingTime)}</Typography>
      </Box>
      <Box
        borderTop={1}
        borderBottom={1}
        display="flex"
        flexDirection="row"
        p={1}
        m={1}
        bgcolor="background.paper"
      >
        <Box className={classes.box}>{origin}</Box>
        <Box>
          <Avatar className={classes.landingIcon}>
            <FlightLandIcon />
          </Avatar>
        </Box>
        <Box className={classes.box}>{destination}</Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography>{gate}</Typography>
        <Typography>{seat}</Typography>
        <Typography className={flightStatusStyle}>{flightStatus}</Typography>
      </Box>
    </Paper>
  );
}

/* eslint-disable react/forbid-prop-types */
Landing.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  gate: PropTypes.string.isRequired,
  seat: PropTypes.string.isRequired,
  isOnTime: PropTypes.bool.isRequired,
  boardingTime: PropTypes.number.isRequired,
  flightNumber: PropTypes.string.isRequired,
};
