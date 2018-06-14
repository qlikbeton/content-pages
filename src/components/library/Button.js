import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from './';
import './Button.css';

const Button = props => {
  const classNames = ['Button'];

  if(props.primary) classNames.push('is-primary');
  if(props.small) classNames.push('is-small');
  if(props.link) classNames.push('is-link');
  if(props.icon) classNames.push('has-icon', `has-icon-position-${props.iconPosition}`, `has-icon-size-${props.iconSize}`);
  if(props.wide) classNames.push('is-wide');

  const ButtonContent = (
    <React.Fragment>
      <span className="Button-label">{props.label}</span>
      {props.icon && <span className="Button-icon"><Icon name={props.icon} size={props.iconSize} /></span>}
    </React.Fragment>
  );

  return (
    <div className={classNames.join(' ')}>
      {props.to &&
        <Link to={props.to}>{ButtonContent}</Link>}

      {props.onClick &&
        <a onClick={props.onClick}>{ButtonContent}</a>}

      {props.submit &&
        <button type="submit">{ButtonContent}</button>}
    </div>
  );
}

Button.propTypes = {
  iconSize: PropTypes.string,
  iconPosition: PropTypes.string
};

Button.defaultProps = {
  iconSize: 'small',
  iconPosition: 'right'
};

export default Button;