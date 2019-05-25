import React, { Component } from 'react';

export default class Post extends Component {

    constructor(props) {
        super(props);
    }

    renderBrief(value) {
        return (
            <div>
                <h2>{value.title}</h2>
                <div dangerouslySetInnerHTML={{__html: value.content.brief}}/>
            </div>
        );
    }

    renderExtended(value) {
        return (
            <div>
                <h2>{value.title}</h2>
                <div dangerouslySetInnerHTML={{__html: value.content.extended}}/>
            </div>
        );
    }

    render() {
        const { value, brief } = this.props;
        console.log(value);
        if (brief === true) {
            return this.renderBrief(value);
        }
        else {
            return this.renderExtended(value);
        }
    }
}