import React from './node_modules/react';
import Posts from './posts';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Ludu's Blog</h1>
                <Posts />
            </div>
        );
    }
}