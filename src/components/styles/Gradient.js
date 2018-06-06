import React from 'react';
import './Gradient.css';

const Gradient = ({ children, type, before, after }) => (
  <div className={`Gradient ${type ? 'is-'+ type : ''} ${before ? 'is-before' : ''} ${after ? 'is-after' : ''}`}>
    {children}
  </div>
);

export default Gradient;