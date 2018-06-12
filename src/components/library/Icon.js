import React from 'react';
import './Icon.css';

import arrowRightSVG from '../../assets/img/arrow-right-white.svg';

const icons = {
  'arrow-right': arrowRightSVG
};

const SpecificIcon = props => {
  const svg = icons[props.name];

  return <img src={svg} alt="Icon" />;
};

const Icon = props => (
  <div className="Icon">
    <SpecificIcon name={props.name} />
  </div>
);

export default Icon;