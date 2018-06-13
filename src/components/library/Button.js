import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './';
import './Button.css';

const Button = props => {
  const classNames = ['Button'];

  if(props.primary) classNames.push('is-primary');
  if(props.small) classNames.push('is-small');
  if(props.icon) classNames.push('has-icon');
  if(props.wide) classNames.push('is-wide');

  const ButtonContent = (
    <React.Fragment>
      <span className="Button-label">{props.label}</span>
      {props.icon && <span className="Button-icon"><Icon name={props.icon} /></span>}
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

export default Button;