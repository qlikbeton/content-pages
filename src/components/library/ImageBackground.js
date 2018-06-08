import React from 'react';
import { Image } from './';
import './ImageBackground.css';

const ImageBackground = props => {
  const classNames = ['Image-background'];

  if(props.half) classNames.push('is-half');

  return (
    <div className={classNames.join(' ')} style={{ backgroundImage: `url(${props.src})` }}>
      {props.children &&
        <div className="Image-background-overlay">
          {props.children}
        </div>
      }
      <Image {...props} />
    </div>
  );
};

export default ImageBackground;