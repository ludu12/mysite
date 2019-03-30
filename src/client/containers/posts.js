import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsFetchData } from '../actions/actions.js';
import Post from '../components/post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.renderPosts = this.renderPosts.bind(this)
    }

    componentDidMount() {
        const API_URL = 'http://localhost:3000/api/post';

        this.props.fetchPosts(API_URL);
        // I am setting some delay to simulate a real world request
        // setTimeout(() => { }, 1000);
    }

    renderPosts() {
        return this.props.posts
            .filter((post) => {
                return post.state === 'published';
            })
            .map((post) => {
                return <Post key={post._id} value={post} brief={true} />
            })

    }
    render() {
        if (this.props.loading) {
            return (
                <div>
                    <h1>LOADING...</h1>
                </div>
            );
        }
        else {
            return (
                <div>
                    {this.renderPosts()}
                </div>
            );
        }
    };
};


function mapStateToProps(state, ownProps) {
    // Things return here are showing in props for Characters
    return {
        posts: state.posts,
        loading: state.loadPosts,
    };
}

// anything returned from here will end up in the props
const mapDispatchToProps = dispatch => ({
    // Our thunk will be mapped to this.props.fetchPost
    fetchPosts: (url) => dispatch(postsFetchData(url)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Posts);