import React from 'react';
import './app.scss';
import Posts from '../post/posts';
import ErrorBoundary from '../error/error-boundary';


const App = () => {
  return (
    <ErrorBoundary>
      <div className='app'>
        <Posts/>
      </div>
    </ErrorBoundary>
  );
};

export default App;
