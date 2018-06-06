import React from 'react';
import { Gradient } from '../styles';
import './Heading.css';

const Heading = props => {
  const classNames = ['Heading'];

  if(props.accent) classNames.push('has-accent');

  const HeadingElement = (
    <div className={classNames.join(' ')}>
      {props.h1 && <h1>{props.title}</h1>}
      {props.h2 && <h2>{props.title}</h2>}
    </div>
  );

  if(props.accent) {
    return (
      <Gradient type="horizontal" after>{HeadingElement}</Gradient>
    );
  }

  else {
    return (HeadingElement);
  }
}

export default Heading;