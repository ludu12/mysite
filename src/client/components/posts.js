import React, { Component } from 'react';
import axios from 'axios'
import Post from './post';

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.renderPosts = this.renderPosts.bind(this);
        this.state = {
            loaded: false,
            posts: []
        };
    }

    async componentDidMount() {
        const response = await axios.get(`${API_BASE}/api/post`);
        this.setState({
            posts: response.data.posts,
            loaded: true
        });
    }

    renderPosts() {
        return this.state.posts
            .filter((post) => {
                return post.state === 'published';
            })
            .map((post) => {
                return <Post key={post._id} value={post} brief={true} />;
            });

    }
    render() {
        if (this.state.loaded) {
            return (
                <div>
                    {this.renderPosts()}
                </div>
            );
        } else {
            return (
                <div>
                    <h1>LOADING...</h1>
                </div>
            );
        }
    }
}