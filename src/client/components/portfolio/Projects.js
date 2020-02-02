import React from 'react';
import { useGraphql } from '../../hooks/useGraphql';
import CircularProgress from '@material-ui/core/CircularProgress';
import PostPreview from '../blog/PostPreview';

const GET_PROJECTS = 'query GetProjects { allProjects { title id brief extended } }';

const Projects = () => {
  const { data, loading } = useGraphql(GET_PROJECTS);

  const results = () => {
    if (loading) {
      return <CircularProgress color='inherit'/>;
    }
    return data.data.allProjects.map(post => (<PostPreview key={post.id} post={post}/>));
  };

  return (
    <div>
      {results()}
    </div>
  );
};

export default Projects;
