import React from 'react';
import PropTypes from 'prop-types';
import './error.scss';

export const Error = (props) => {
    return (
        <div className='error-page'>
            <h3>An unexpected error has occurred.</h3>
            <p>Please contact development at helpdesk@dptechlink.com for assistance.</p>
            <details className='error-details' style={{ whiteSpace: 'pre-wrap' }}>
                {props.error && props.error.toString()}
                <br />
                {props.errorInfo && props.errorInfo.componentStack}
            </details>
        </div>
    );
};

export default Error;

Error.propTypes = {
    error: PropTypes.object,
    errorInfo: PropTypes.object
};
