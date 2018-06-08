import React from 'react';
import { Image } from './';
import './Feature.css';

const Feature = props => {
  const classNames = ['Feature'];

  if(props.inversed) classNames.push('is-inversed');
  if(props.full) classNames.push('is-full');

  return (
    <div className={classNames.join(' ')}>
      {props.symbol && <div className="Feature-symbol">{props.symbol}</div> }
      <div className="Feature-image">
        <Image src={props.image} accent accentRight={props.inversed} />
      </div>
      <div className="Feature-content">
        {props.children}
      </div>
    </div>
  );
}

export default Feature;