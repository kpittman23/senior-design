import React from 'react';
import injectSheet from 'react-jss';
import classnames from 'classnames';
import {colors} from '../constants';

const StepIndicatorWithClasses = ({
  classes,
  isSelected,
  stepNumber,
  onClick,
}) => (
  <div className={classnames(classes.container, {[classes.isSelected]: isSelected})}>
    {stepNumber}
  </div>
);

const styles = {
  container: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: colors.white,
    color: colors.darkGray,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  isSelected: {
    backgroundColor: colors.darkGray,
    color: colors.white,
  }
};

export default injectSheet(styles)(StepIndicatorWithClasses);
