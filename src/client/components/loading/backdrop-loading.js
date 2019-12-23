import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import './loading.scss';

const BackdropLoading = () => {
  return (
    <Backdrop
      classes='backdrop-loading'
      open={true}
      timeout={100}>
      <CircularProgress color='inherit'/>
    </Backdrop>
  );
};

export default BackdropLoading;
