import React from 'react';
import injectSheet from 'react-jss';
import ProgressBar from '../components/ProgressBar';
import { Button } from 'grommet';
import { Box } from 'grommet';
import LottieControl from '../components/LottieControl';

const ActivityPageWithClasses = ({
  classes,
  currentLevel,
  numLevels = 10,
}) => (
    <div className={classes.page}>
      <ProgressBar currentSelectedStepNumber={currentLevel} numSteps={numLevels} />
      <div className={classes.flexCenter}>
        <Box className={classes.box} border={{ color: 'brand', size: 'small' }} round='xsmall'>
          <LottieControl />
        </Box>
        <Button className={classes.button} label='Run' primary='true' />
        <Button className={classes.button} label='Hint' />
      </div>
    </div>
  );

const styles = {
  page: {
    width: '100vw',
    minHeight: '100vh',
    padding: 35,
    boxSizing: 'border-box',
    '& > *': {
      boxSizing: 'border-box'
    }
  },
  box: {
    width: 500,
    height: 500,
    margin: 5,
    padding: 1,
  },
  button: {
    margin: 5,
    marginTop: 10,
    width: '20%',
  },
  flexCenter: {
    float: 'right',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default injectSheet(styles)(ActivityPageWithClasses);