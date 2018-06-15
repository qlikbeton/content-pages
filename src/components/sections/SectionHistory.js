import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Heading, Text, RichText, Feature } from '../library';

const SectionHistory = ({ config, ...props }) => (
  <Section name="History">
    <SectionContent container>
      <Heading h2 title={config.translate(props.name)('title')} accent />
      <Text center subtitle>{config.translate(props.name)('subtitle')}</Text>

      {props.rows && props.rows.map((row, idx) => (
        <Feature image={row.image} key={idx} inversed={idx % 2 === 1}>
          <RichText text={config.translate(props.name)(row.key)} />
        </Feature>
      ))}
    </SectionContent>
  </Section>
);

export default withConfig(SectionHistory);