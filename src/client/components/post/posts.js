import React from 'react';
import { useGraphql } from '../../hooks/useGraphql';
import Post from './post';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const GET_POSTS = 'query GetPosts { allPosts { title id image { publicUrl } } }';

const Posts = () => {
  const { data, loading } = useGraphql(GET_POSTS);

  const results = () => {
    if (loading) {
      return <CircularProgress color='inherit'/>;
    }
    return data.data.allPosts.map(post => (<Post key={post.id} post={post}/>));
  };

  return (
    <Paper className='posts' elevation={1} square={true}>
      <Typography variant="h5" component="h3">Posts</Typography>
      {results()}
    </Paper>
  );
};

export default Posts;
