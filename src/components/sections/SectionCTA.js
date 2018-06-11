import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Button } from '../library';
import { Gradient } from '../styles';

const SectionCTA = ({ config, ...props }) => (
  <Section name="CTA" center minimal>
    <Gradient type="horizontal">
      <SectionContent>
        <Button label={config.translate(props.name)('cta')} to={props.to} />
      </SectionContent>
    </Gradient>
  </Section>
);

export default withConfig(SectionCTA);