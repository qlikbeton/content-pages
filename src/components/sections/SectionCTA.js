import React from 'react';
import Section, { SectionContent } from './';
import { Button } from '../library';
import { Gradient } from '../styles';

const SectionCTA = props => (
  <Section name="CTA" center minimal>
    <Gradient type="horizontal">
      <SectionContent>
        <Button label="Call To Action" />
      </SectionContent>
    </Gradient>
  </Section>
);

export default SectionCTA;