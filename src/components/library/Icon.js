import React from 'react';
import './Icon.css';

import arrowRightSVG from '../../assets/img/arrow-right-white.svg';
import chatSVG from '../../assets/img/btn-chat.svg';
import downloadSVG from '../../assets/img/download-red.svg';
import phoneSVG from '../../assets/img/tel-blue.svg';

const icons = {
  'arrow-right': arrowRightSVG,
  'chat': chatSVG,
  'download': downloadSVG,
  'phone': phoneSVG
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