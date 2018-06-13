import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Card, Heading, Button, Form, FormRow, FormFooter, FormInput, FormTextarea } from '../library';
import { Gradient } from '../styles';

const SectionContactForm = ({ config, ...props }) => (
  <Section name="ContactForm" background="gray">
    <SectionContent container>
      <Card>
        <Heading h2 title="Contact form" accent />

        <Form>
          <FormRow>
            <FormInput
              type="text"
              name="name"
              placeholder="Prenom / Nom"
              label="Prenom / Nom" />

            <FormInput
              type="email"
              name="email"
              placeholder="Email"
              label="Email" />
          </FormRow>

          <FormInput
            type="text"
            name="subject"
            placeholder="Sujet"
            label="Sujet" />

          <FormTextarea
            name="message"
            placeholder="Descriptif"
            label="Descriptif"
            rows="8" />

          <FormFooter>
            <Button submit label="Envoyer le message" icon="arrow-right" primary small wide />
          </FormFooter>
        </Form>
      </Card>
    </SectionContent>
  </Section>
);

export default withConfig(SectionContactForm);