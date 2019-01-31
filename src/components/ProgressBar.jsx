import React, { Component } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import StepIndicator from './StepIndicator';
import { colors } from '../constants';

class ProgressBarWithClasses extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentSelectedStepNumber: props.initialSelectedStepNumber,
    }
  }

  setSelectedStep = (stepNumber) => {
    this.setState({
      currentSelectedStepNumber: stepNumber,
    })
  }

  render(){
    const {
      classes,
      className,
      numSteps = 1,
    } = this.props;
    
    return (
    
      <div className={classnames(classes.progressBar, className)}>
        {[...Array(numSteps).keys()].map((val, arrayIndex) => {
          const stepNumber = arrayIndex + 1;
          return (
            <StepIndicator 
              key={stepNumber}
              isSelected={this.state.currentSelectedStepNumber === stepNumber}
              stepNumber={stepNumber}
              onClick={()=>{this.setSelectedStep(stepNumber)}}
            />
          );
        })}
      </div>
    );
  }
}

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

ProgressBarWithClasses.defaultProps = {
  initialSelectedStepNumber: 1,
}

export default injectSheet(styles)(ProgressBarWithClasses);
