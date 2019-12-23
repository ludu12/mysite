import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post }) => {
  return (
    <div className='post'>
      <p>{JSON.stringify(post, null, 2)}</p>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
