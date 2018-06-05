import React from 'react';
import Section from './';
import { Grid, GridCol, Heading, Text, Card } from '../library';

const SectionBenefits = props => (
  <Section name="Benefits" container paddingV background="gray">
    <Heading h1 accent title="Benefits Section" />

    <Card>
      <Text center subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <Text center>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
    </Card>

    <Grid>
      <GridCol>
        <Card>
          <Text center light>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
          <Text center>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>
        </Card>
      </GridCol>

      <GridCol>
        <Card>
          <Text center>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
        </Card>
      </GridCol>
    </Grid>
  </Section>
);

export default SectionBenefits;