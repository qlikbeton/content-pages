import React from 'react';
import Page from './';
import { Breadcrumbs } from '../library';
import {
  SectionHero,
  SectionIntro,
  SectionLocations,
  SectionCTA
} from '../sections';

import { coverImg, introLocationsImg } from '../../data';

const LocationsPage = props => (
  <Page name="Locations">
    <Breadcrumbs nav={[
      { label: 'Qlikbeton', to: '/' },
      { label: 'Locations' }
    ]}/>

    <SectionHero
      name="locationsHero"
      cover={coverImg} />

    <SectionIntro
      name="locationsIntro"
      image={introLocationsImg} />

    <SectionLocations />

    <SectionCTA
      name="locationsCTA"
      to="/" />
  </Page>
);

export default LocationsPage;