import React from 'react';
import './RichText.css';

const RichText = props => {
  const createMarkup = () => {
    return {
      __html: props.text
    }
  }

  return (
    <div className="Text Rich-text">
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
}

export default RichText;