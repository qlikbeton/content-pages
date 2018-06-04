import React from 'react';
import Section from './';
import { Grid, GridCol, Image, Heading } from '../library';
import './SectionIntro.css';
import img from '../../assets/img/people.jpg';

const SectionIntro = props => (
  <Section name="Intro">
    <Grid vcenter>
        <GridCol>
          <div className="Intro-left">
            <Image src={img} />
          </div>
        </GridCol>
        <GridCol>
          <div className="Intro-right">
            <Heading h2 title="Intro Section" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar. In pulvinar eros ut lacus rhoncus, ac porttitor metus malesuada. Donec quis venenatis nulla. Integer mattis orci at placerat porttitor.</p>
          </div>
        </GridCol>
    </Grid>
  </Section>
);

export default SectionIntro;