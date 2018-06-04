import React from 'react';
import './AppContainer.css';

const AppContainer = props => (
  <div className="App-container">
    {props.children}
  </div>
)

export default AppContainer;