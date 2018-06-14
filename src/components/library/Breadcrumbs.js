import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './';
import { Gradient } from '../styles';
import './Breadcrumbs.css';

const Breadcrumbs = props => (
  <div className="Breadcrumbs">
    <Gradient type="horizontal">
      <div className="Breadcrumbs-content">
      {props.nav && props.nav.map((item, idx) => (
        item.to ? <React.Fragment key={idx}>
                    <Link to={item.to}>{item.label}</Link>
                    <Icon name="arrow-right" size="small" />
                  </React.Fragment>
                : <span key={idx}>{item.label}</span>
      ))}
      </div>
    </Gradient>
  </div>
);

export default Breadcrumbs;