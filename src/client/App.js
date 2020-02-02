import React from 'react';
import NavigationBar from './components/navigation/NavigationBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import About from './components/about/About';
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import Portfolio from './components/portfolio/Portfolio';

const App = () => {
  return (
    <Router>
      <CssBaseline/>
      <Container maxWidth='md'>
        <NavigationBar/>
        <Switch>
          <Route path='/blog' component={Blog}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/about' component={About}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
