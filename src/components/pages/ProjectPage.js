import React from 'react';
import Page from './';
import { Breadcrumbs } from '../library';
import {
  SectionHero,
  SectionIntro,
  SectionStages,
  SectionAdvantages,
  SectionCTA
} from '../sections';

import { coverImg, introProjectImg } from '../../data';

const ProjectPage = props => (
  <Page name="Project">
    <Breadcrumbs nav={[
      { label: 'Qlikbeton', to: '/' },
      { label: 'Projects', to: '/projects' },
      { label: 'Foundation' }
    ]}/>

    <SectionHero
      name="projectHero"
      cover={coverImg}
      cta={{ key: 'cta', 'to': '/' }} />

    <SectionIntro
      name="projectIntro"
      image={introProjectImg} />

    <SectionStages
      name="projectStages" />

    <SectionAdvantages
      name="projectAdvantages" />

    <SectionCTA
      name="projectCTA"
      to="/about" />
  </Page>
);

export default ProjectPage;