import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/Github';
import './navigation.scss';
import IconButton from '@material-ui/core/IconButton';

const Bar = () => {
  return (

    <AppBar position='sticky'>
      <Toolbar>
        <div className='bar'>
          <div>
            <Typography>Luke Dunscombe</Typography>
            
          </div>
          <div>
            <IconButton href='https://twitter.com/LukeDunscombe'>
              <TwitterIcon/>
            </IconButton>
            <IconButton href='https://github.com/ludu12'>
              <GithubIcon/>
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Bar;
