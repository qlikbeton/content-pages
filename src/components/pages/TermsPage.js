import React from 'react';
import Page from './';
import { Breadcrumbs } from '../library';
import { SectionHero, SectionArticle, SectionCTA } from '../sections';
import { coverImg } from '../../data';

const TermsPage = props => (
  <Page name="Terms">
    <Breadcrumbs nav={[
      { label: 'Qlikbeton', to: '/' },
      { label: 'Terms' }
    ]} />

    <SectionHero
      name="termsHero"
      cover={coverImg} />

    <SectionArticle
      name="termsArticle" />
  </Page>
);

export default TermsPage;
