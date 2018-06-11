import React from 'react';
import { Link } from 'react-router-dom';
import { Gradient } from '../styles';
import './Breadcrumbs.css';

const Breadcrumbs = props => (
  <div className="Breadcrumbs">
    <Gradient type="horizontal">
      <div className="Breadcrumbs-content">
      {props.nav && props.nav.map((item, idx) => (
        item.to ? <Link key={idx} to={item.to}>{item.label}</Link>
                : <span key={idx}>{item.label}</span>
      ))}
      </div>
    </Gradient>
  </div>
);

export default Breadcrumbs;