import React from 'react';
import { withConfig } from '../config';
import Section, { SectionWrapper } from './';
import { Text, Image, Heading } from '../library';
import { Gradient } from '../styles';

const SectionIntro = ({ config, ...props }) => (
  <Section name="Intro" background="gray">
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
          <Heading h2 title={config.translate(props.name)('title')} />
          <Text noSpacing>{config.translate(props.name)('text')}</Text>
        </SectionWrapper>
      </div>
    </div>
  </Section>
);

export default withConfig(SectionIntro);