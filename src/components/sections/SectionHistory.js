import React from 'react';
import Section, { SectionContent } from './';
import { Heading, Text, Feature } from '../library';
import img from '../../assets/img/img-feature.jpg';

const SectionHistory = props => (
  <Section name="History">
    <SectionContent container>
      <Heading h1 title="History Section" accent />
      <Text center subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>

      <Feature image={img}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar. In pulvinar eros ut lacus rhoncus, ac porttitor metus malesuada. Donec quis venenatis nulla. Integer mattis orci at placerat porttitor.</Text>      
      </Feature>

      <Feature image={img} inversed>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar. In pulvinar eros ut lacus rhoncus, ac porttitor metus malesuada. Donec quis venenatis nulla. Integer mattis orci at placerat porttitor.</Text>      
      </Feature>
    </SectionContent>
  </Section>
);

export default SectionHistory;