import React from 'react';
import { ConfigConsumer } from '@qlibbeton/config';

export const withConfig = Component => props => (
    <ConfigConsumer>
      {config => <Component config={config} {...props} />}
    </ConfigConsumer>
)