import React from 'react';
import { useGraphql } from '../../hooks/useGraphql';
import PostPreview from './post-preview';
import CircularProgress from '@material-ui/core/CircularProgress';
import './post.scss';


const GET_POSTS = 'query GetPosts { allPosts { title id state image { publicUrl } brief extended } }';

const Posts = () => {
  const { data, loading } = useGraphql(GET_POSTS);

  const results = () => {
    if (loading) {
      return <CircularProgress color='inherit'/>;
    }
    return data.data.allPosts.map(post => (<PostPreview key={post.id} post={post}/>));
  };

  return (
    <div className='posts'>
      {results()}
      {results()}
      {results()}
      {results()}
    </div>
  );
};

export default Posts;
