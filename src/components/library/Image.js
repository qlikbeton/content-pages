import React from 'react';
import { Gradient } from '../styles';
import './Image.css';

const Image = props => {
  const classNames = ['Image'];

  if(props.accent) classNames.push('has-accent');
  if(props.accentRight) classNames.push('has-accent-right');

  const ImageElement = (
    <div className={classNames.join(' ')}>
      <img src={props.src} alt={props.alt || 'Image'} />
    </div>
  );

  if(props.accent) {
    return (
      <Gradient type="vertical" before>{ImageElement}</Gradient>
    );
  }

  else {
    return (ImageElement);
  }
};

export default Image;