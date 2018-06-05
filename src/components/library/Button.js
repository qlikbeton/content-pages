import React from 'react';
import './Button.css';

const Button = props => {
  const classNames = ['Button'];

  return (
    <div className={classNames.join(' ')}>
      <a>{props.label}</a>
    </div>
  );
}

export default Button;