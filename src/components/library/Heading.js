import React from 'react';
import './Heading.css';

const Heading = props => (
  <div className={`Heading ${props.accent ? 'has-accent' : ''}`}>
    {props.h1 && <h1>{props.title}</h1>}
    {props.h2 && <h2>{props.title}</h2>}
  </div>
);

export default Heading;