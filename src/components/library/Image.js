import React from 'react';
import './Image.css';

const Image = props => (
  <div className="Image">
    <img {...props} alt={props.alt || 'Image'} />
  </div>
);

export default Image;