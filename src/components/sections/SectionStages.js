import React from 'react';
import Section, { SectionContent } from './';
import { Heading, Text, Feature } from '../library';
import img from '../../assets/img/img-feature.jpg';

const SectionStages = props => (
  <Section name="Stages">
    <SectionContent container>
      <Heading h1 title="Stages Section" accent />
      <Text center subtitle regular>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

      <Feature image={img} symbol="01" inversed>
        <Heading h1 title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar. In pulvinar eros ut lacus rhoncus, ac porttitor metus malesuada. Donec quis venenatis nulla. Integer mattis orci at placerat porttitor.</Text>      
      </Feature>
    </SectionContent>

    <SectionContent container background="gray">
      <Feature image={img} symbol="02">
        <Heading h1 title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>      
      </Feature>
    </SectionContent>

    <SectionContent container>
      <Feature image={img} symbol="03" inversed>
        <Heading h1 title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar. In pulvinar eros ut lacus rhoncus, ac porttitor metus malesuada. Donec quis venenatis nulla. Integer mattis orci at placerat porttitor.</Text>      
      </Feature>
    </SectionContent>

    <SectionContent container background="gray">
      <Feature image={img} symbol="04">
        <Heading h1 title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>      
      </Feature>
    </SectionContent>

    <SectionContent container>
      <Feature image={img} symbol="05" inversed>
        <Heading h1 title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar. In pulvinar eros ut lacus rhoncus, ac porttitor metus malesuada. Donec quis venenatis nulla. Integer mattis orci at placerat porttitor.</Text>      
      </Feature>
    </SectionContent>
  </Section>
);

export default SectionStages;