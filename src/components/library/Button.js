import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = props => {
  const classNames = ['Button'];

  if(props.primary) classNames.push('is-primary');
  if(props.small) classNames.push('is-small');

  return (
    <div className={classNames.join(' ')}>
      {props.to && <Link to={props.to}>{props.label}</Link>}
      {props.onClick && <a onClick={props.onClick}>{props.label}</a>}
    </div>
  );
}

export default Button;