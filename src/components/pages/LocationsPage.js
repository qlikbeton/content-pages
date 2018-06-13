import React from 'react';
import Page from './';
import { Breadcrumbs } from '../library';
import {
  SectionHero,
  SectionIntro,
  SectionHistory,
  SectionBenefits,
  SectionBranding,
  SectionTeam,
  SectionCTA
} from '../sections';

import { teamMembers, historyRows, coverImg, introImg } from '../../data';

const LocationsPage = props => (
  <Page name="About">
    <Breadcrumbs nav={[
      { label: 'Qlikbeton', to: '/' },
      { label: 'Locations' }
    ]}/>

    <SectionHero
      name="aboutHero"
      cover={coverImg} />

    <SectionIntro
      name="aboutIntro"
      image={introImg} />

    <div>
      <iframe
        style={{ border: '0', margin: '0', padding: '0', display: 'block' }}
        src="https://www.google.com/maps/d/embed?mid=17W4lPpFkEidAq5v9JRFJSIrVNibI_nGr" width="100%" height="800"></iframe>
    </div>

    <SectionCTA
      name="aboutCTA"
      to="/project" />
  </Page>
);

export default LocationsPage;