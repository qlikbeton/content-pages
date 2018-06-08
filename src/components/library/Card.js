import React from 'react';
import './Card.css';

const Card = props => {
  const classNames = ['Card'];

  if(props.center) classNames.push('is-text-center');

  return (
    <div className={classNames.join(' ')}>
      {props.children}
    </div>
  );
}

const Cards = props => {
  const classNames = ['Cards'];

  return (
    <div className={classNames.join(' ')}>
      {props.children}
    </div>
  );
}

export default Card;

export {
  Cards
};