import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { orange, red } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import FlightTakeOffIcon from '@material-ui/icons/FlightTakeoff';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: red[500],
  },
  traffic: {
    color: orange[700],
  },
}));

export default function Takeoff({ airportName, busynessIndex }) {
  const classes = useStyles();
  const trafficStatus = busynessIndex > 5 ? 'buzy' : '';
  const airport = `${airportName} Airport`;
  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item xs={4}>
        <Avatar className={classes.avatar}>
          <FlightTakeOffIcon />
        </Avatar>
      </Grid>
      <Grid item xs={8}>
        <Typography>{airport}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Box color="text.primary">Terminal C</Box>
          <Box className={classes.traffic}>{trafficStatus}</Box>
        </Box>
      </Grid>
    </Grid>
  );
}

/* eslint-disable react/forbid-prop-types */
Takeoff.propTypes = {
  busynessIndex: PropTypes.number.isRequired,
  airportName: PropTypes.string.isRequired,
};
