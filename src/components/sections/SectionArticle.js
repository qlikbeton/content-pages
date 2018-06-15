import React from 'react';
import Section, { SectionContent } from './';
import { RichText, Card } from '../library';
import { withConfig } from '../config';

const SectionArticle = ({config, ...props}) => (
  <Section name="Article" background="gray">
    <SectionContent container>
      <Card>
        <RichText textLeft text={config.translate(props.name)('text')} />
      </Card>
    </SectionContent>
  </Section>
);

export default withConfig(SectionArticle);