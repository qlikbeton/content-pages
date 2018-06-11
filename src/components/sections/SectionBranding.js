import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Heading, Text } from '../library';

const SectionBranding = ({ config, ...props }) => (
  <Section name="Branding" center cover={props.cover}>
    <SectionContent container wrapper>
      <Heading h2 accent title={config.translate(props.name)('title')} />
      <Text noSpacing center>{config.translate(props.name)('text')}</Text>
    </SectionContent>
  </Section>
);

export default withConfig(SectionBranding);