import React from 'react';
import injectSheet from 'react-jss';
import classnames from 'classnames';
import {colors} from '../constants';
import { Link } from 'react-router';

const StepIndicatorWithClasses = ({
  classes,
  isSelected,
  stepNumber,
  onClick,
}) => (
  <div className={classnames(classes.container, {[classes.isSelected]: isSelected})} onClick={onClick}>
    <Link to={"/" + stepNumber}>{stepNumber}</Link>
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
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  isSelected: {
    width: 35,
    height: 35,
    backgroundColor: colors.darkGray,
    color: colors.white,
  }
};

export default injectSheet(styles)(StepIndicatorWithClasses);
