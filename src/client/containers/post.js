import React, { Component } from 'react';
import { connect } from 'react-redux';
// Remember our thunk this is where we will need to make use of it
import { postsFetchData } from '../actions/actions.js';
// We gonna use lodash to map over our post object
import _ from 'lodash'

class Post extends Component {
    constructor(props) {
        super(props);
        // Bind our render post to function so we can use it in the render method 
        this.renderPost = this.renderPost.bind(this)
    }

    // Fetch posts when component is mounted
    componentDidMount() {
		const API_URL = 'http://localhost:3000/api/post';
        // I am setting some delay to simulate a real world request
        setTimeout(() => { this.props.fetchPosts(API_URL); }, 1000);
    }
    // Function to render our post
    renderPost() {
        return (
            <h2>LOADED!</h2>
        );
    }
    render() {
        if (this.props.loading) {
            return (
                <div>
                    <h1>LOADING...</h1>
                </div>
            );
        }
        return (
            <div>
                {this.renderPost()}
            </div>
        );
    };
};


function mapStateToProps (state, ownProps) {
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


export default connect(mapStateToProps, mapDispatchToProps)(Post);