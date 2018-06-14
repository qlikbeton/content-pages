import React from 'react';
import './Text.css';

const Text = props => {
  const classNames = ['Text'];

  if(props.noSpacing) classNames.push('has-no-spacing');
  if(props.spacingBottom) classNames.push('has-spacing-bottom');
  if(props.center) classNames.push('has-text-center');
  if(props.subtitle) classNames.push('is-subtitle');
  if(props.bold) classNames.push('is-bold');
  if(props.light) classNames.push('is-light');
  if(props.regular) classNames.push('is-regular');
  if(props.wrapper) classNames.push('has-wrapper');

  return (
    <div className={classNames.join(' ')}>
      <p>{props.children}</p>
    </div>
  );
}

export default Text;