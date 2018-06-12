import React from 'react';
import { ImageBackground } from './';
import './Gallery.css';

const Gallery = props => {
  const classNames = ['Gallery'];

  return (
    <div className={classNames.join(' ')}>
      <div className="Gallery-col">
        <div className="Gallery-col">
          <ImageBackground src={props.images && props.images.first.image} half>
            {props.images && props.images.first.text}
          </ImageBackground>
        </div>
        <div className="Gallery-col">
          <ImageBackground src={props.images && props.images.second.image} half>
            {props.images && props.images.second.text}
          </ImageBackground>
        </div>
      </div>
      <div className="Gallery-col">
        <ImageBackground src={props.images && props.images.third.image}>
          {props.images && props.images.third.text}
        </ImageBackground>
      </div>
    </div>
  );
}

export default Gallery;