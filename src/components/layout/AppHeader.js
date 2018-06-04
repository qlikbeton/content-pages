import React from 'react';
import QlikHeader from '@qlibbeton/header';

const AppHeader = props => (
  <QlikHeader toggleMenu={()=> console.log('toggle')} />
)

export default AppHeader;