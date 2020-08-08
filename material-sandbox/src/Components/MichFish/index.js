import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DashBoard from './DashBoard';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        minHeight: 500,
      },
  });



const MichFish = ( props ) => {
    const classes= useStyles();
    return (
    <Grid container className={classes.root}>
        <Grid item sm={12}>
        <DashBoard />
        </Grid>
    </Grid>
    )
};

export default MichFish;