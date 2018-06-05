import React from 'react';
import Section from './';
import { Heading, Text } from '../library';
import coverImg from '../../assets/img/bg-hero.jpg';

const SectionBranding = props => (
  <Section name="Branding" container paddingV cover={coverImg}>
    <Heading h1 accent title="Branding Section" />
    <Text noSpacing center>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
  </Section>
);

export default SectionBranding;