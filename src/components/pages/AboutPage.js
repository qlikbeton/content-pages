import React from 'react';
import Page from './';
import { Breadcrumbs } from '../library';
import { SectionHero, SectionIntro, SectionHistory } from '../sections';

const AboutPage = props => (
  <Page name="About">
    <Breadcrumbs />
    <SectionHero />
    <SectionIntro />
    <SectionHistory />
  </Page>
);

export default AboutPage;