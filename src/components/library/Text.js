import React from 'react';
import './Text.css';

const Text = props => {
  const classNames = ['Text'];

  if(props.noSpacing) classNames.push('has-no-spacing');

  return (
    <div className={classNames.join(' ')}>
      <p>{props.children}</p>
    </div>
  );
}

export default Text;