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

import { teamMembers, historyRows, coverImg, introAboutImg, brandingImg } from '../../data';

const AboutPage = props => (
  <Page name="About">
    <Breadcrumbs nav={[
      { label: 'Qlikbeton', to: '/' },
      { label: 'About Us' }
    ]}/>

    <SectionHero
      name="aboutHero"
      cover={coverImg} />

    <SectionIntro
      name="aboutIntro"
      image={introAboutImg} />

    <SectionHistory
      name="aboutHistory"
      rows={historyRows} />

    <SectionBenefits
      name="aboutBenefits" />

    <SectionBranding
      name="aboutBranding"
      cover={brandingImg} />

    <SectionTeam
      name="aboutTeam"
      list={teamMembers} />

    <SectionCTA
      name="aboutCTA"
      to="/project" />
  </Page>
);

export default AboutPage;