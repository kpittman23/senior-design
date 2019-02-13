import React from 'react';
import injectSheet from 'react-jss';
import ProgressBar from '../components/ProgressBar';
import BlobWorkspace from '../components/BlobWorkspace'

const ActivityPageWithClasses = ({
  classes,
  currentLevel,
  numLevels = 10, 
}) => (
  <div className={classes.page}>
    <ProgressBar currentSelectedStepNumber={currentLevel} numSteps={numLevels}/>
    <BlobWorkspace/>
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
  }
}

export default injectSheet(styles)(ActivityPageWithClasses);