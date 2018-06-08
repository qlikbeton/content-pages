import React from 'react';
import { Gradient } from '../styles';
import './Heading.css';

const Heading = props => {
  const classNames = ['Heading'];

  if(props.accent) classNames.push('has-accent');
  if(props.inherit) classNames.push('has-inherit');

  const HeadingElement = (
    <div className={classNames.join(' ')}>
      {props.h1 && <h1>{props.title}</h1>}
      {props.h2 && <h2>{props.title}</h2>}
      {props.h3 && <h3>{props.title}</h3>}
      {props.h4 && <h4>{props.title}</h4>}
      {props.h5 && <h5>{props.title}</h5>}
      {props.h6 && <h6>{props.title}</h6>}
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