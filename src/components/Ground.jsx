import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DepartureBoard from '@material-ui/icons/DepartureBoard';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Ground({ address }) {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item xs={2}>
        <Avatar className={classes.avatar}>
          <DepartureBoard />
        </Avatar>
      </Grid>
      <Grid item xs={10}>
        <Typography>Pick up from</Typography>
        <Box color="text.primary">{address}</Box>
      </Grid>
    </Grid>
  );
}

/* eslint-disable react/forbid-prop-types */
Ground.propTypes = {
  address: PropTypes.string.isRequired,
};
