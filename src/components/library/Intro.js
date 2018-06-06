import React from 'react';
import { SectionWrapper } from '../sections';
import { Text, Image, Heading } from '../library';
import { Gradient } from '../styles';
import './Intro.css';

const Intro = props => (
  <div className="Intro">
    <div className="Intro-left">
      <Gradient type="vertical" before>
        <div className="Intro-image">
          <Image src={props.image} />
        </div>
      </Gradient>
    </div>

    <div className="Intro-right">
      <SectionWrapper hasWidthFixed>
        <Heading h2 title="Intro Section" />
        <Text noSpacing>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
      </SectionWrapper>
    </div>
  </div>
);

export default Intro;