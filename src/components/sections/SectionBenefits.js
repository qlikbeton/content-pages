import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Grid, GridCol, Heading, Text, Card } from '../library';

const SectionBenefits = ({ config, ...props }) => (
  <Section name="Benefits" background="gray">
    <SectionContent container>
      <Heading h2 accent title={config.translate(props.name)('title')} />

      <Card>
        <Text center subtitle>{config.translate(props.name)('firstCardFirstRow')}</Text>
        <Text center>{config.translate(props.name)('firstCardSecondRow')}</Text>
      </Card>

      <Grid>
        <GridCol>
          <Card>
            <Text center light>{config.translate(props.name)('secondCardFirstRow')}</Text>
            <Text center>{config.translate(props.name)('secondCardSecondRow')}</Text>
          </Card>
        </GridCol>

        <GridCol>
          <Card>
            <Text center>{config.translate(props.name)('thirdCardFirstRow')}</Text>
          </Card>
        </GridCol>
      </Grid>
    </SectionContent>
  </Section>
);

export default withConfig(SectionBenefits);