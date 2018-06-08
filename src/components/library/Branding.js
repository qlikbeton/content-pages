import React from 'react';
import { Heading, Text } from '../library';
import coverImge from '../../assets/img/bg-hero.jpg';
import './Branding.css';

const Branding = props => {
  const classNames = ['Branding'];

  return (
    <div className={classNames.join(' ')} style={{ backgroundImage: `url(${coverImge})` }}>
      <Heading h2 accent title="Branding Section" inherit />
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

      <Heading h3 title="Materials" inherit />
      
      <div className="List">
        <div className="List-item">
          <div className="List-item-image"></div>
          <div className="List-item-title">Pelleteuse</div>
        </div>
        <div className="List-item">
          <div className="List-item-image"></div>
          <div className="List-item-title">Pelle</div>
        </div>
        <div className="List-item">
          <div className="List-item-image"></div>
          <div className="List-item-title">Fil</div>
        </div>
        <div className="List-item">
          <div className="List-item-image"></div>
          <div className="List-item-title">Fil a plomb</div>
        </div>
        <div className="List-item">
          <div className="List-item-image"></div>
          <div className="List-item-title">Dameuse</div>
        </div>
        <div className="List-item">
          <div className="List-item-image"></div>
          <div className="List-item-title">Niveau</div>
        </div>
      </div>
    </div>
  );
}

export default Branding;