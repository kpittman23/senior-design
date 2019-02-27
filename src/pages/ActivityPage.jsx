import React from 'react';
import injectSheet from 'react-jss';
import ProgressBar from '../components/ProgressBar';
import { Button, Box, Paragraph } from 'grommet';
import LottieControl from '../components/LottieControl';

const ActivityPageWithClasses = ({
  classes,
  currentLevel,
  numLevels = 10,
}) => (
    <div className={classes.page}>
      <ProgressBar currentSelectedStepNumber={currentLevel} numSteps={numLevels} />
      <Box className={classes.instructions} border={{ color: 'none', size: 'small' }} round='small'>
        <Paragraph size='medium' textAlign='center'>This is where the instructions will go. Hello! :^)</Paragraph>
      </Box>
      <div className={classes.flexCenter}>
        <Box className={classes.workspace} border={{ color: 'grey', size: 'small' }} round='xsmall'>
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
    },
    // backgroundColor: '#D8D8D8',
  },
  workspace: {
    width: 600,
    height: 500,
    margin: 5,
    marginTop: 10,
    padding: 1,
    backgroundColor: 'white',
  },
  instructions: {
    width: '50%',
    height: 80,
    margin: 5,
    padding: 1,
    backgroundColor: '#88E7E0',
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