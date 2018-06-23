import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Heading, RichText, SubscribeForm } from '../library';

const SectionComingSoon = ({ config, ...props }) => (
  <Section name="ComingSoon" center cover={props.cover}>
    <SectionContent container fullHeight>
      <Heading h1 title={config.translate(props.name)('title')} />
      <Heading h2 title={config.translate(props.name)('subtitle')} />
      <RichText wrapper text={config.translate(props.name)('text')} />

    </SectionContent>
  </Section>
);

export default withConfig(SectionComingSoon);
