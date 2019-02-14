import React from 'react';
import injectSheet from 'react-jss';
import classnames from 'classnames';
import {colors} from '../constants';
import LottieControl from './LottieControl';

const BlobWorkspace = ({
  classes,
}) => (
  <div className={classnames(classes.container)}>
    <LottieControl />
  </div>
);

const styles = {
  container: {
    width: 500,
    height: 500,
    backgroundColor: colors.lightOrange,
    display: 'flex',
    float: 'right',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: 20,
  },
};

export default injectSheet(styles)(BlobWorkspace);
