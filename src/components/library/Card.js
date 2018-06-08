import React from 'react';
import { Gradient } from '../styles';
import './Card.css';

const Card = props => {
  const classNames = ['Card'];

  if(props.center) classNames.push('is-text-center');
  if(props.name) classNames.push(`Card-${props.name}`);

  return (
    <div className={classNames.join(' ')}>
      {props.children}
    </div>
  );
}

const CardStep = props => (
  <Card name="Step">
    <div className="Step-number">
      <Gradient type="vertical" before>
        <div className="Step-number-container">{props.number}</div>
      </Gradient>
    </div>
    <div className="Step-text">
      {props.children}
    </div>
  </Card>
);

const Cards = props => {
  const classNames = ['Cards'];

  if(props.cols) classNames.push(`has-${props.cols}-cols`);

  return (
    <div className={classNames.join(' ')}>
      {props.children}
    </div>
  );
}

export default Card;

export {
  Cards,
  CardStep
};