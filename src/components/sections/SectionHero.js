import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Heading, Text, Button } from '../library';

const SectionHero = ({ config, ...props }) => (
  <Section name="Hero" cover={props.cover}>
    <SectionContent container wrapper>
      <Heading h1 title={config.translate(props.name)('title')} />
      <Text noSpacing>{config.translate(props.name)('text')}</Text>
      {props.cta && <Button primary label={config.translate(props.name)(props.cta.key)} to={props.cta.to} />}
    </SectionContent>
  </Section>
);

export default withConfig(SectionHero);