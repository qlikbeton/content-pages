import React from 'react';
import './AppWrapper.css';

const AppWrapper = props => (
  <div className={`App-wrapper ${props.hasWidthFixed ? 'has-width-fixed' : ''}`}>
    {props.children}
  </div>
);

export default AppWrapper;