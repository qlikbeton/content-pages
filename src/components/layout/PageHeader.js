import React from 'react';
import QlikHeader from '@qlibbeton/header';

const PageHeader = props => (
  <QlikHeader
    toggleMenu={()=> console.log('toggle')} />
);

export default PageHeader;