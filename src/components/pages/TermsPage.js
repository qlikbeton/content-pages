import React from 'react';
import Page from './';
import SectionArticle from '../sections/SectionArticle';
import {SectionHero,SectionCTA} from '../sections';



const TermsPage = props => (
  <Page name="Terms">
    <SectionHero name="aboutHero"/>
    <SectionArticle/>
    <SectionCTA/>
  </Page>
);

export default TermsPage;