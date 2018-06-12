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

const ContactPage = props => (
  <Page name="About">
    <Breadcrumbs nav={[
      { label: 'Qlikbeton', to: '/' },
      { label: 'Contact' }
    ]}/>

    <SectionHero
      name="aboutHero"
      cover={coverImg} />
      
    <SectionCTA
      name="aboutCTA"
      to="/project" />
  </Page>
);

export default ContactPage;