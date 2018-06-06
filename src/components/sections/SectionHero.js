import React from 'react';
import Section, { SectionContent } from './';
import { Heading, Text } from '../library';
import coverImg from '../../assets/img/bg-hero.jpg';

const SectionHero = props => (
  <Section name="Hero" cover={coverImg}>
    <SectionContent container wrapper>
      <Heading h1 title="Hero Section" />
      <Text noSpacing bold>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>
    </SectionContent>
  </Section>
);

export default SectionHero;