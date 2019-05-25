import React from 'react';

const Post = (post) => {
    const { value, brief } = post;
    if (brief === true) {
        return (
            <div>
                <h2>{value.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: value.content.brief }} />
            </div>
        );
    } else {
        return (
            <div>
                <h2>{value.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: value.content.extended }} />
            </div>
        );
    }
};

export default Post;