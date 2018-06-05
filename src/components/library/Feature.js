import React from 'react';
import { Image } from './';
import './Feature.css';

const Feature = props => {
  const classNames = ['Feature'];

  if(props.inversed) classNames.push('is-inversed');

  return (
    <div className={classNames.join(' ')}>
      <Image src={props.image} accent accentRight={props.inversed} />
      <div className="Feature-content">
        {props.children}
      </div>
    </div>
  );
}

export default Feature;