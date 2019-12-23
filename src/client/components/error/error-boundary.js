import React, { Component } from 'react';
import Error from './error';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, info) {
    this.setState({
      error: error,
      errorInfo: info
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <Error error={this.state.error} errorInfo={this.state.errorInfo}/>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

