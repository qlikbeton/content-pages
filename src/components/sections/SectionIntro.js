import React from 'react';
import Section from './';
import { AppWrapper } from '../layout';
import { Text, Image, Heading } from '../library';
import './SectionIntro.css';
import img from '../../assets/img/img-intro.jpg';

const SectionIntro = props => (
  <Section name="Intro" background="gray">
    <div className="Intro-left">
      <Image src={img} />
    </div>

    <div className="Intro-right">
      <AppWrapper hasWidthFixed>
        <Heading h2 title="Intro Section" />
        <Text noSpacing>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
      </AppWrapper>
    </div>
  </Section>
);

export default SectionIntro;