import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Heading, Text, Gallery } from '../library';
import galleryImg from '../../assets/img/img-gallery.jpg';

const SectionAdvantages = ({ config, ...props }) => (
  <Section name="Advantages" center background="gray">
    <SectionContent container>
      <Heading h2 title={config.translate(props.name)('title')} accent />
      <Text>{config.translate(props.name)('text')}</Text>

      <Gallery images={{
          first: {
            image: galleryImg
          },
          second: {
            image: galleryImg
          },
          third: {
            image: galleryImg
          }
        }} />
    </SectionContent>
  </Section>
);

export default withConfig(SectionAdvantages);