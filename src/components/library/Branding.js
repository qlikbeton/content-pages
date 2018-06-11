import React from 'react';
import { Heading } from '../library';
import './Branding.css';

const Branding = props => (
  <div className="Branding" style={{ backgroundImage: `url(${props.cover})` }}>
    <Heading h2 accent title={props.title} inherit />
    {props.children}
  </div>
);

export default Branding;