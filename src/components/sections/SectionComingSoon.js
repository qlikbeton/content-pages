import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Heading, Text, SubscribeForm } from '../library';

const SectionComingSoon = ({ config, ...props }) => (
  <Section name="ComingSoon" center cover={props.cover}>
    <SectionContent container fullHeight>
      <Heading h1 title={config.translate(props.name)('title')} />
      <Heading h2 title={config.translate(props.name)('subtitle')} />
      <Text noSpacing wrapper>{config.translate(props.name)('text')}</Text>

      <SubscribeForm
        input="email"
        placeholder={config.translate(props.name)('placeholder')}
        submit={config.translate(props.name)('submit')} />
    </SectionContent>
  </Section>
);

export default withConfig(SectionComingSoon);