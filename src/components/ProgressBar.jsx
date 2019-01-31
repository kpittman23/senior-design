import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import StepIndicator from './StepIndicator';
import { colors } from '../constants';

const ProgressBarWithClasses = ({
  classes,
  className,
  currentSelectedStepNumber = 1,
  numSteps = 1,
}) => (

  <div className={classnames(classes.progressBar, className)}>
    {[...Array(numSteps).keys()].map((val, arrayIndex) => {
      const stepNumber = arrayIndex + 1;
      return (
        <StepIndicator 
          key={stepNumber}
          isSelected={currentSelectedStepNumber === stepNumber}
          stepNumber={stepNumber}
        />
      );
    })}
  </div>
);

const styles = {
  progressBar: {
    width: '100%',
    height: 60,
    padding: '15px 70px',
    backgroundColor: colors.lightOrange,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    '& > * + *': {
      marginLeft: 20,
    }
  }
}

export default injectSheet(styles)(ProgressBarWithClasses);
