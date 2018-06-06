import React from 'react';
import { Gradient } from '../styles';
import './Breadcrumbs.css';

const Breadcrumbs = props => (
  <div className="Breadcrumbs">
    <Gradient type="horizontal">
      <div className="Breadcrumbs-content">
        <a>Breadcrumbs</a>
      </div>
    </Gradient>
  </div>
);

export default Breadcrumbs;