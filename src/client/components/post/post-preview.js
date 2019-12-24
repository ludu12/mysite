import React from 'react';
import PropTypes from 'prop-types';
import { ExpansionPanel } from '@material-ui/core';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const PostPreview = ({ post }) => {

  const brief = () => {
    return { __html: `${post.brief}` };
  };


  return (
    <div className='post preview'>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography>{post.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {post.image && <img src={post.image.publicUrl} alt={post.image.publicUrl} height="80" width="80"/>}
          <div dangerouslySetInnerHTML={brief()}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

PostPreview.propTypes = {
  post: PropTypes.object
};

export default PostPreview;
