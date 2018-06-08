import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Heading, Text, Button } from '../library';
import coverImg from '../../assets/img/bg-hero.jpg';

const SectionHero = ({ config, ...props }) => (
  <Section name="Hero" cover={coverImg}>
    <SectionContent container wrapper>
      <Heading h1 title={config.translate(props.name)('title')} />
      <Text noSpacing>{config.translate(props.name)('text')}</Text>
      {/*<Button primary label={props.cta} />*/}
    </SectionContent>
  </Section>
);

export default withConfig(SectionHero);