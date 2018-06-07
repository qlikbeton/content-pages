import React from 'react';
import './Button.css';

const Button = props => {
  const classNames = ['Button'];

  if(props.primary) classNames.push('is-primary');

  return (
    <div className={classNames.join(' ')}>
      <a>{props.label}</a>
    </div>
  );
}

export default Button;