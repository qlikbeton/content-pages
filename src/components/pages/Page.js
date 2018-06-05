import React from 'react';
import './Page.css';

const Page = props => (
  <div className={`Page Page-${props.name}`}>
    {props.children}
  </div>
);

export default Page;