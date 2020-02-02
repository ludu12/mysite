import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GithubIcon from '@material-ui/icons/Github';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkButton from './LinkButton';
import { Toolbar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const NavigationBar = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Grid container alignItems='center' justify='space-between'>
          <Grid>
            <Grid container>
              <Typography>Luke Dunscombe</Typography>
              <LinkButton label='Blog' to='/blog'/>
              <LinkButton label='Work portfolio' to='/portfolio'/>
              <LinkButton label='About' to='/about'/>
            </Grid>
          </Grid>
          <Grid>
            <IconButton href='https://twitter.com/LukeDunscombe'>
              <TwitterIcon/>
            </IconButton>
            <IconButton href='https://github.com/ludu12'>
              <GithubIcon/>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
