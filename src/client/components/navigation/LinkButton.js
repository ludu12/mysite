import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const LinkButton = props => {
  const match = useRouteMatch(props.to);
  return (
    <Button variant={match ? 'outlined' : undefined} component={Link} {...props}>
      {props.label}
    </Button>
  );
};

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkButton;
