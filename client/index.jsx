import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// This will be the entry point of our app
const App = () => {
  return (
    // We will add our components here
    <div />
  );
};

ReactDOM.render(
  // We need to wrap our app in provider to make use of redux
  <Provider>
    <App />
  </Provider>,
  document.querySelector('.react-container'));