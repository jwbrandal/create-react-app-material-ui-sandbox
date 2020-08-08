import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        minHeight: 500,
      },
  });


    const FishGlossary = () => {
        const classes= useStyles();
        return (
            <Paper>
              Test
        </Paper>
        )
    };

    export default FishGlossary;