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
        <div>
          <p>Hi, I&#39;m Luke Dunscombe and I&#39;m a professional software developer from Des, Moines.</p>
        </div>
        <Posts/>
      </div>
    </ErrorBoundary>
  );
};

export default App;
