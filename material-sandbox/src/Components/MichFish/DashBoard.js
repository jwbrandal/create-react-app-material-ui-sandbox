import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FishGlossary from './FishGlosssary';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        minHeight: 500,
      },
  });

const DashBoard = ({styles}) => {
    const classes= useStyles();
    return (
        <Paper className={classes.root}>
          <FishGlossary />
        </Paper>
        )
    }
export default DashBoard;
