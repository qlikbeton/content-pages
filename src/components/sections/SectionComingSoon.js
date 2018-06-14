import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Heading, Text, Button, Form, FormInput } from '../library';

const SectionComingSoon = ({ config, ...props }) => (
  <Section name="ComingSoon" center cover={props.cover}>
    <SectionContent container fullHeight>
      <Heading h1 title={config.translate(props.name)('title')} />
      <Heading h2 title={config.translate(props.name)('subtitle')} />
      <Text noSpacing>{config.translate(props.name)('text')}</Text>

      <Form>
          <FormInput placeholder={config.translate(props.name)('placeholder')} />
          <Button submit label={config.translate(props.name)('submit')} primary small />
      </Form>
    </SectionContent>
  </Section>
);

export default withConfig(SectionComingSoon);