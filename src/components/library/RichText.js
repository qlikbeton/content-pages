import React from 'react';
import './RichText.css';

const RichText = props => {
  const createMarkup = () => {
    return {
      __html: props.text
    }
  }

  const classNames = ['Text Rich-text'];

  if(props.noSpacing) classNames.push('has-no-spacing');
  if(props.spacingBottom) classNames.push('has-spacing-bottom');
  if(props.center) classNames.push('has-text-center');
  if(props.textLeft) classNames.push('has-text-left');
  if(props.subtitle) classNames.push('is-subtitle');
  if(props.bold) classNames.push('is-bold');
  if(props.light) classNames.push('is-light');
  if(props.regular) classNames.push('is-regular');
  if(props.wrapper) classNames.push('has-wrapper');

  return (
    <div className={classNames.join(' ')}>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
}

export default RichText;