import React from 'react';
import './Info.css';

const Info = props => (
  <div className={`Info ${props.vcenter ? 'has-vcenter' : ''}`}>
    {props.children}
  </div>
);

const InfoCol = props => (
  <div className={`Info-col has-${props.cols}-cols`}>
    {props.children}
  </div>
);

export default Info;
export {
  InfoCol
};