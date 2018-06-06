import React from 'react';
import Section from './';
import { Intro } from '../library';
import img from '../../assets/img/img-intro.jpg';

const SectionIntro = props => (
  <Section name="Intro" background="gray">
    <Intro image={img} />
  </Section>
);

export default SectionIntro;