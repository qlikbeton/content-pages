import React from 'react';
import './Grid.css';

const Grid = props => {
  const classNames = ['Grid'];

  if(props.vcenter) classNames.push('has-vcenter')

  return (
    <div className={classNames.join(' ')}>
      {props.children}
    </div>
  );
}

const GridCol = ({ children }) => (
  <div className="Grid-col">
    {children}
  </div>
);

export {
  Grid,
  GridCol
};