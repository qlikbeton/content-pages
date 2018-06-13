import React from 'react';
import Page from './';
import { Breadcrumbs } from '../library';
import {
  SectionHero,
  SectionContactDetails,
  SectionContactForm,
  SectionCTA
} from '../sections';

import { coverImg } from '../../data';

const ContactPage = props => (
  <Page name="Contact">
    <Breadcrumbs nav={[
      { label: 'Qlikbeton', to: '/' },
      { label: 'Contact' }
    ]}/>

    <SectionHero
      name="contactHero"
      cover={coverImg} />

    <SectionContactDetails
      name="contactDetails" />

    <SectionContactForm 
      name="contactForm" />
      
    <SectionCTA
      name="contactCTA"
      to="/" />
  </Page>
);

export default ContactPage;