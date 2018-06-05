import React from 'react';
import Section from './';
import { Heading, Text } from '../library';
import coverImg from '../../assets/img/bg-hero.jpg';

const SectionHero = props => (
  <Section name="Hero" container wrapper paddingV cover={coverImg}>
    <Heading h1 title="Hero Section" />
    <Text noSpacing bold>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>
  </Section>
);

export default SectionHero;