import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Card, Heading, Button, Form, FormRow, FormFooter, FormInput, FormTextarea } from '../library';

const SectionContactForm = ({ config, ...props }) => (
  <Section name="ContactForm" background="gray">
    <SectionContent container>
      <Card>
        <Heading h2 title={config.translate(props.name)('title')} accent />

        <Form>
          <FormRow>
            <FormInput
              type="text"
              name="name"
              placeholder={config.translate(props.name)('placeholderName')}
              label={config.translate(props.name)('formName')} />

            <FormInput
              type="email"
              name="email"
              placeholder={config.translate(props.name)('placeholderEmail')}
              label={config.translate(props.name)('formEmail')} />
          </FormRow>

          <FormInput
            hasError
            type="text"
            name="subject"
            placeholder={config.translate(props.name)('placeholderSubject')}
            label={config.translate(props.name)('formSubject')} />

          <FormTextarea
            name="message"
            placeholder={config.translate(props.name)('placeholderMessage')}
            label={config.translate(props.name)('formMessage')}
            addon={<Button link onClick={() => console.log('click')} label={config.translate(props.name)('attachFile')} icon="download" />}
            rows="8" />

          <FormFooter>
            <Button submit label={config.translate(props.name)('title')} icon="arrow-right" primary small wide />
          </FormFooter>
        </Form>
      </Card>
    </SectionContent>
  </Section>
);

export default withConfig(SectionContactForm);