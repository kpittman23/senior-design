import React from 'react';
import injectSheet from 'react-jss';
import ProgressBar from '../components/ProgressBar';
import { Button, Box, Text } from 'grommet';
import LucyComponent from '../components/LucyComponent';
import GeoffComponent from '../components/GeoffComponent';
import HintModal from '../components/HintModal';
import ConclusionModal from '../components/ConclusionModal';

const ActivityPageWithClasses = ({
  classes,
  currentLevel,
  numLevels = 10,
}) => (
    <div className={classes.page}>
      <ProgressBar currentSelectedStepNumber={currentLevel} numSteps={numLevels} />
      <Box className={classes.instructions} border={{ color: 'none', size: 'small' }} round='small'>
        <Text size='small' textAlign='center'>{instructions}</Text>
      </Box>
      <div className={classes.flexCenter}>
        <Box className={classes.workspace} border={{ color: 'grey', size: 'small' }} round='xsmall'>
          <div>
            <GeoffComponent />
          </div>
          <div className={classes.gridDisplay}>
            <LucyComponent />
            <LucyComponent style='float: right' />
          </div>
        </Box>
        <Button className={classes.button} label='Run' primary='true' onClick={() => {
          this.handleSound();
        }} />
        <HintModal />
        <ConclusionModal />
      </div>
    </div>
  );

const instructions = 'Can you make Lucy play music? What do you think will happen?'

const styles = {
  page: {
    width: '100vw',
    minHeight: '100vh',
    padding: 35,
    boxSizing: 'border-box',
    '& > *': {
      boxSizing: 'border-box'
    },
  },
  workspace: {
    width: 600,
    height: 500,
    margin: 5,
    marginTop: 10,
    backgroundColor: 'white',
  },
  instructions: {
    width: '50%',
    height: 60,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#88E7E0',
    fontFamily: 'Roboto',
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
  gridDisplay: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
  }
}

export default injectSheet(styles)(ActivityPageWithClasses);