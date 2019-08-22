import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  icon: {
    width: 40,
    height: 40,
  },
  appBar: {
    backgroundColor: 'rgb(72, 56, 76)',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="relative">
      <Toolbar>
        <img
          className={classes.icon}
          alt="Yilu logo"
          src="https://lever-client-logos.s3.amazonaws.com/a2989fc1-94ee-405b-89e5-e33f6ba4089b-1534436645810.png"
        />
        <Typography variant="h6" color="inherit" noWrap>
          一路
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
