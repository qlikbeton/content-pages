import React from 'react';
import QlikFooter from '@qlibbeton/footer';

const AppFooter = props => (
  <QlikFooter
    toggleDisplayAboutSectionLinks={() => console.log('footer')}
    toggleDisplayMoreSectionLinks={() => console.log('footer')} />
);

export default AppFooter;