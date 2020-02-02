import React from 'react';
import { useGraphql } from '../../hooks/useGraphql';
import CircularProgress from '@material-ui/core/CircularProgress';
import PostPreview from './PostPreview';

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
    <div>
      {results()}
    </div>
  );
};

export default Posts;
