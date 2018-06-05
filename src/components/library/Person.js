import React from 'react';
import { Heading, Text, Image } from './';
import './Person.css';

const Person = props => {
  const classNames = ['Person'];

  return (
    <div className={classNames.join(' ')}>
      <div className="Person-image">
        <Image src={props.image} alt={props.name} />
      </div>

      <div className="Person-info">
        <Heading h1 title={props.name} />
        <Text noSpacing bold>{props.title}</Text>
        <Text noSpacing>{props.children}</Text>
      </div>
    </div>
  );
}

export default Person;