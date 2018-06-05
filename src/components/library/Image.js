import React from 'react';
import './Image.css';

const Image = props => {
  const classNames = ['Image'];

  if(props.accent) classNames.push('has-accent');
  if(props.accentRight) classNames.push('has-accent-right');

  return (
    <div className={classNames.join(' ')}>
      <img src={props.src} alt={props.alt || 'Image'} />
    </div>
  );
};

export default Image;