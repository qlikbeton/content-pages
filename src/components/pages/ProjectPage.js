import React from 'react';
import Page from './';
import { Breadcrumbs } from '../library';
import {
  SectionHero,
  SectionIntro,
  SectionStages,
  SectionCTA
} from '../sections';

const ProjectPage = props => (
  <Page name="Project">
    <Breadcrumbs />
    <SectionHero name="projectHero" cta="Call To Action" />
    <SectionIntro />
    <SectionStages />
    <SectionCTA />
  </Page>
);

export default ProjectPage;