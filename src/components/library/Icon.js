import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

import arrowRightSVG from '../../assets/img/icons/icon-arrow-right.svg';
import chatSVG from '../../assets/img/icons/icon-chat.svg';
import downloadSVG from '../../assets/img/icons/icon-download.svg';
import phoneSVG from '../../assets/img/icons/icon-phone.svg';
import headsetSVG from '../../assets/img/icons/icon-headset.svg';

const icons = {
  'arrow-right': arrowRightSVG,
  'chat': chatSVG,
  'download': downloadSVG,
  'phone': phoneSVG,
  'headset': headsetSVG
};

const SpecificIcon = props => {
  const svg = icons[props.name];

  return <img src={svg} alt="Icon" />;
};

const Icon = props => (
  <div className={`Icon is-${props.size}`}>
    <SpecificIcon name={props.name} />
  </div>
);

Icon.propTypes = {
  size: PropTypes.string
};

Icon.defaultProps = {
  size: 'regular'
};

export default Icon;