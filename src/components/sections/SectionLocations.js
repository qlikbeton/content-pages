import React from 'react';
import { withConfig } from '../config';

const SectionLocations = ({ config, ...props }) => (
  <div>
    <iframe
      title="locationsMap"
      style={{ border: '0', margin: '0', padding: '0', display: 'block' }}
      src="https://www.google.com/maps/d/embed?mid=17W4lPpFkEidAq5v9JRFJSIrVNibI_nGr" width="100%" height="800"></iframe>
  </div>
);

export default withConfig(SectionLocations);