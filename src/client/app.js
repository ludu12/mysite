import React from 'react';
import ErrorBoundary from './components/error/error-boundary';
import Bar from './components/navigation/bar';
import Posts from './components/post/posts';
import './app.scss';

const App = () => {
  return (
    <ErrorBoundary>
      <div className='app'>
        <Bar/>
        <Posts/>
      </div>
    </ErrorBoundary>
  );
};

export default App;
