import React from 'react';
import { useGraphql } from '../hooks/useGraphql';

const GET_TODOS = `
    query GetTodos {
      allTodos {
        name
        id
      }
    }
  `;

const App = () => {
  const { data, loading } = useGraphql(GET_TODOS);

  const results = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    return <p>{JSON.stringify(data, null, 2)}</p>;
  };
  
  return (
    <div className='app'>
      <h1>Todo list</h1>
      {results()}
    </div>
  );
};

export default App;
