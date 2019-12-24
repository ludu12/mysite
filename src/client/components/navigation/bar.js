import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Bar = () => {
  return (
    <div className='bar'>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Typography variant='h6'>Welcome</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Bar;
