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
  <Link to={"/" + stepNumber} className={classnames(classes.container, {[classes.isSelected]: isSelected})}>{stepNumber}</Link>
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
    textDecoration: 'none',
    margin: 30,
  },
  isSelected: {
    width: 35,
    height: 35,
    backgroundColor: colors.darkGray,
    color: colors.white,
    textDecoration: 'none',
  }
};

export default injectSheet(styles)(StepIndicatorWithClasses);
