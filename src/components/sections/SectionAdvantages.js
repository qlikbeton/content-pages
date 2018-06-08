import React from 'react';
import Section, { SectionContent } from './';
import { Heading, Text, Gallery } from '../library';

const SectionAdvantages = props => (
  <Section name="Advantages" center background="gray">
    <SectionContent container>
      <Heading h2 title="Advantages Section" accent />
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar. In pulvinar eros ut lacus rhoncus, ac porttitor metus malesuada. Donec quis venenatis nulla. Integer mattis orci at placerat porttitor.</Text>

      <Gallery />
    </SectionContent>
  </Section>
);

export default SectionAdvantages;