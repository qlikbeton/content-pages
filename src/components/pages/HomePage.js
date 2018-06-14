import React from 'react';
import Page from './';
import { SectionComingSoon } from '../sections';
import coverImg from '../../assets/img/bg-cover.png';

const HomePage = props => (
  <Page name="Home">
    <SectionComingSoon
      name="homeComingSoon"
      cover={coverImg} />
  </Page>
);

export default HomePage;