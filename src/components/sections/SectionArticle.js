import React from 'react';
import Section, {SectionContent} from './';
import {Heading, Text, Card} from '../library';
import {withConfig} from '../config';

const SectionArticle = ({config, ...props}) => (
  <Section name="Article" background="gray">
    <SectionContent container>
      <Card>
        <Heading h4 title="Text" capitalize/>
        <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris justo nisi, placerat sed ipsum a,
          maximus sagittis turpis. Pellentesque porttitor vehicula elementum. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.</Text>
      </Card>
    </SectionContent>
  </Section>

);

export default withConfig(SectionArticle);