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

    <SectionCTA
      name="aboutCTA"
      to="/project" />
  </Page>
);

export default LocationsPage;