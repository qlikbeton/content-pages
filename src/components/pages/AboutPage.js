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

const AboutPage = props => (
  <Page name="About">
    <Breadcrumbs />
    <SectionHero />
    <SectionIntro />
    <SectionHistory />
    <SectionBenefits />
    <SectionBranding />
    <SectionTeam />
    <SectionCTA />
  </Page>
);

export default AboutPage;